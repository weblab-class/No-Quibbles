/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Event = require("./models/event");
// const Tag = require("./models/tag");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});


router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.post("/additem", auth.ensureLoggedIn, (req, res) => {
  const newItem = new Item({
    // body with two keys -> creates JS object with 2 properties/keys
    // middleware -> throw error  
    name: req.body.name,
    time: req.body.time,
  }); 
  // saving to database
  newItem.save().then((item) => {
    User.findById(req.user._id).then((user) => {
      user.cart.push(item);
      // if user found -> will update user
      user.save().then((updatedUser) => res.send({user: updatedUser, item: item}));
    })
    // will throw error at .save if Schema type not met
    // except when req.body is undefined
  }).catch((err) =>res.status(400).send({message: err.message}))
});

router.post("/deleteitem", auth.ensureLoggedIn, (req, res) => {
  // match whatever frontend passed in 
  Item.findByIdAndDelete(req.body.itemid).then((item) => {
    User.findById(req.user._id).then((user) => {
      let updatedCart = user.cart;
      const itemIndex = user.cart.indexOf(item); //-1 is DNE
      if (itemIndex != -1) {
        updatedCart = updatedCart.splice(itemIndex, 1);
      } 
      user.cart = updatedCart;
      // if user found -> will update user
      user.save().then((updatedUser) => res.send(updatedUser));
    })
    // if user found -> will update user
  }).catch((err) =>res.status(400).send({message: err.message}))
});

router.get("/cart", auth.ensureLoggedIn, (req, res) => {
  // findById async function; map is not
  // swim meet analogy :) 
  User.findById(req.user._id).then((user) => {
    // mongoose automatically knows what itemid input is
    // apply function to every element inside array
    // .map returns array of promises -> convert to another array element by element
    // have to return inside .map
    const promiseArray = user.cart.map((itemid) => {
       // found item -> return item in one line
       // shorthand for item => {return item}
       // returns the promise -> about to be Items
       return Item.findById(itemid); // .then((item) => item);
    })
    // error will be thrown here unless all ready to move forward
    return Promise.all(promiseArray); 
  }).then((allItems) => {
      // input to res.send has to be object
    res.send({itemlist: allItems});
  }).catch((err) => res.status(400).send({message: err.message}))
  // doesn't restart function if error thrown
});


// instead of querying every time, just find 
router.get("/user", (req, res) => {
  User.findById(req.user._id).then((user) => {
    res.send(user);
  });
});

// find an event from id
router.get("/event", (req, res) => {
  // empty selector means get all documents 
  Event.findById(req.event._id).then((event) => res.send(event));
});

//create custom event
router.post("/event", auth.ensureLoggedIn, (req, res) => {
  const newEvent = new Event({
    name: req.body.name,
    tagnames: req.body.tags,
  });

  newEvent.save().then((event) => res.send(event));
});

// get tags associated with event
// router.get("/tag", (req, res) => {
//   Tag.find({ parent: req.query.parent }).then((tags) => {
//     res.send(tags);
//   });
// });

// custom user tags
// router.post("/tag", auth.ensureLoggedIn, (req, res) => {
//   const newTag = new Tag({
//     // parent event
//     parent: req.body.parent,

//     content: req.body.content,
//   });

//   newTag.save().then((tag) => res.send(tag));
// });


// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
