const Payment = require("../models/payment.model");
const Student = require("../models/student.model");
const bcrypt = require("bcryptjs");

const saveStudent = async (req, res) => {
  console.log(req.file);
  const {
    fullname,
    email,
    password,
    contact_number,
    description,
    address,
    province,
    Zip_code,
    Country,
    typeOfassist,
  } = req.body;
  console.log(req.file, req.body);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const imagePath = req?.file?.path;

  const student = new Student({
    fullName: fullname,
    email,
    password: hashedPassword,
    contact_number,
    description,
    address,
    province,
    Zip_code,
    Country,
    typeOfassist,
    image: imagePath,
  });

  const result = await student.save();
  return res.send(result);
};

const getStudents = async (req, res) => {
  const students = await Student.find({}).populate("donar");

  return res.send(students);
};

const deleteStudent = async (req, res) => {
  const { _id } = req.params;
  const result = await Student.findByIdAndDelete({ _id });
  return res.send(result);
};

const editStudent = async (req, res) => {
  const { _id } = req.params;
  const result = await Student.findByIdAndUpdate(_id, req.body);
  return res.send(result);
};

const getStudent = async (req, res) => {
  const { _id } = req.params;
  const result = await Student.findOne({ _id }).populate("donar", "fullName");
  const payment = await Payment.findOne({ donar: result?.donar?.id });

  const restObject = { ...result };
  restObject._doc.payment = payment?.amount;

  return res.send(restObject._doc);
};

const AllStudent = async (req, res) => {
  const students = await Student.find();
  return res.send(students.count());
};

module.exports = {
  saveStudent,
  getStudents,
  deleteStudent,
  editStudent,
  getStudent,
  AllStudent,
};
