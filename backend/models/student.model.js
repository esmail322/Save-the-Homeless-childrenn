const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  contact_number: Number,
  description: String,
  address: String,
  province: String,
  Zip_code: Number,
  Country: String,
  typeOfassist: String,
  image: String,
  donar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Donar",
  },
});

const Student = mongoose.model("Student", Schema);

module.exports = Student;
