const mongoose = require("mongoose");

//define an event schema for the database
const EventSchema = new mongoose.Schema({
  creator_id: String,
  creator_name: String,
  event_name: String,
});

// compile model from schema
module.exports = mongoose.model("event", EventSchema);
