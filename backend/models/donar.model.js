const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
});

const Donar = mongoose.model("Donar", Schema);

module.exports = Donar;
