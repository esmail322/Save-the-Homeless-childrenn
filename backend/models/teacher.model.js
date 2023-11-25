const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  contact_number: Number,
  address: String,
  province: String,
  Zip_code: Number,
  typeOfteach: String,
  Country: String,
  image: String,
});

const Teacher = mongoose.model("Teacher", Schema);

module.exports = Teacher;
