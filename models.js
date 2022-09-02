const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  desc: String,
  status: String,
  languages: [String],
});

module.exports = mongoose.model("product", schema);