const Teacher = require("../models/teacher.model");
const bcrypt = require("bcryptjs");

const saveTeacher = async (req, res) => {
  const {
    fullname,
    email,
    password,
    contact_number,
    address,
    province,
    Zip_code,
    typeOfteach,
    Country,
  } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const imagePath = req?.file?.path;

  // const hashPassword = await bcrypt.hash(password, 12);

  const teacher = new Teacher({
    fullName: fullname,
    email,
    password: hashedPassword,
    contact_number,
    address,
    province,
    Zip_code,
    typeOfteach,
    Country,
    image: imagePath,
  });

  const result = await teacher.save();
  return res.send(result);
};

const getTeachers = async (req, res) => {
  const teachers = await Teacher.find();
  return res.send(teachers);
};

const deleteTeacher = async (req, res) => {
  const { _id } = req.params;
  const result = await Teacher.findByIdAndDelete({ _id });
  return res.send(result);
};

const editTeacher = async (req, res) => {
  const { _id } = req.params;
  const result = await Teacher.findByIdAndUpdate(_id, req.body);
  return res.send(result);
};

const getTeacher = async (req, res) => {
  const { _id } = req.params;
  const result = await Teacher.findOne({ _id });
  return res.send(result);
};

module.exports = {
  saveTeacher,
  getTeachers,
  deleteTeacher,
  editTeacher,
  getTeacher,
};
