const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  all_eventids: [String], //to put on events mall; has templated+custom
  cart: [Boolean], //same size as alleventsids; tells if event is put into cart (True) or not
  //if checked out then change all to False
  time_given: [Number], //same size as alleventsids; sets time according to how it is inputed in cart by the user
  //if not in cart set to 0, if in cart but set to 0 then set to 0, else set to (hours*60+mins)
  //during checkout do not take into consideration any item with 0 time_given

  //order history, parameters history to-do after MVP
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
