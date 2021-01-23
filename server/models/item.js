const mongoose = require("mongoose");

//define an event schema for the database
// mongoose automatically creates ._id field
const ItemSchema = new mongoose.Schema({
  name: String,
  time: Number,
  owner_id: { ref: 'user', type: mongoose.Schema.Types.ObjectId },
});

// compile model from schema
module.exports = mongoose.model("item", ItemSchema);