const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  desc: String,
  status: String,
  image: String,
  languages: [String],
});

module.exports = mongoose.model("product", schema);
