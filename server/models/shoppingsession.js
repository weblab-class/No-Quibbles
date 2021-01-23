const mongoose = require("mongoose");

const ShoppingSessionSchema = new mongoose.Schema({
  cart: [{ ref: 'item', type: mongoose.Schema.Types.ObjectId }],
  owner_id: { ref: 'user', type: mongoose.Schema.Types.ObjectId },
});

// compile model from schema
module.exports = mongoose.model("shoppingsession", ShoppingSessionSchema);