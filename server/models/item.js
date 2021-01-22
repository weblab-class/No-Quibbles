const mongoose = require("mongoose");

//define an event schema for the database
// mongoose automatically creates ._id field
const ItemSchema = new mongoose.Schema({
  name: String,
  time: Number,
});

// compile model from schema
module.exports = mongoose.model("item", ItemSchema);