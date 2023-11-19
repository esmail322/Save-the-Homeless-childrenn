const Student = require("../models/student.model");
const bcrypt = require("bcrypt");

const saveStudent = async (req, res) => {
  const {
    fullname,
    email,
    password,
    contact_number,
    address,
    province,
    Zip_code,
    Country,
    typeOfassist,
  } = req.body;

  const hashPassword = await bcrypt.hash(password, 12);

  const student = new Student({
    fullName: fullname,
    email,
    password: hashPassword,
    contact_number,
    address,
    province,
    Zip_code,
    Country,
    typeOfassist,
  });

  const result = await student.save();
  return res.send(result);
};

const getStudents = async (req, res) => {
  const students = await Student.find();
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
  const result = await Student.findOne({ _id });
  return res.send(result);
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
