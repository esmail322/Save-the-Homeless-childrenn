const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  contact_number: Number,
  address: String,
  province: String,
  Zip_code: Number,
  Country: String,
  typeOfassist: String,
});

const Student = mongoose.model("Student", Schema);

module.exports = Student;
