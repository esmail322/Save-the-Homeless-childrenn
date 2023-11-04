const Donar = require("../models/donar.model");
const bcrypt = require("bcrypt");

const saveDonar = async (req, res) => {
  const { fullname, email, password } = req.body;

  const hashPassword = await bcrypt.hash(password, 12);

  const donar = new Donar({
    fullName: fullname,
    email,
    password: hashPassword,
  });

  const result = await donar.save();
  return res.send(result);
};

const getDonars = async (req, res) => {
  const donars = await Donar.find();
  return res.send(donars);
};

const deleteDonar = async (req, res) => {
  const { _id } = req.params;
  const result = await Donar.findByIdAndDelete({ _id });
  return res.send(result);
};

const editDonar = async (req, res) => {
  const { _id } = req.params;
  const result = await Donar.findByIdAndUpdate(_id, req.body);
  return res.send(result);
};

const getDonar = async (req, res) => {
  const { _id } = req.params;
  const result = await Donar.findOne({ _id });
  return res.send(result);
};

module.exports = {
  saveDonar,
  getDonars,
  deleteDonar,
  editDonar,
  getDonar,
};
