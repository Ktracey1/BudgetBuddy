const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  listId: String,
  prices: [
    {
      store: String,
      price: Number
    }
  ]
});

module.exports = mongoose.model("Item", itemSchema);