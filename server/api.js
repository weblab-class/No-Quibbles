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
    name: req.name,
    tagnames: req.tags,
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
