const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  fullName: String,
  email: {
    type: String,
    index: {
      unique: true,
    },
  },
  password: String,
});

const Donar = mongoose.model("Donar", Schema);

module.exports = Donar;
