const Donar = require("../models/donar.model");
const bcrypt = require("bcrypt");
const { createJwt } = require("../utils");

const saveDonar = async (req, res) => {
  const { body } = req;

  const hashPassword = await bcrypt.hash(body.password, 12);

  const isEmailExists = await Donar.findOne({ email: body.email });

  if (isEmailExists) {
    return res.status(400).json({ message: "User already exists!" });
  }

  body.password = hashPassword;
  const donar = await Donar.create(body);

  res.status(201).json(donar);
};

const getDonars = async (req, res) => {
  const donars = await Donar.find();
  // const donar = ["some", "jama", "tama"];
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
