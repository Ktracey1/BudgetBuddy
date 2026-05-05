const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  name: String,
  budget: Number,
  userId: String
});

module.exports = mongoose.model("List", listSchema);