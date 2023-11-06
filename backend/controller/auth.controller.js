const Donar = require("../models/donar.model");
const Student = require("../models/student.model");
const Teacher = require("../models/teacher.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const teacher = await Teacher.findOne({ email });
  if (!teacher) {
    const student = await Student.findOne({ email });
    if (!student) {
      const donar = await Donar.findOne({ email });
      if (!donar) {
        return res.status(404).send({ message: "incorrect email or password" });
      } else {
        const doMatch = await bcrypt.compare(password, donar.password);
        if (!doMatch) {
          return res
            .status(400)
            .send({ message: "Incorrect Email or Password" });
        } else {
          const token = jwt.sign({ donar }, "mySecret", {
            algorithm: "HS256",
          });
          return res.status(200).json({ user: donar, token });
        }
      }
    } else {
      const doMatch = await bcrypt.compare(password, student.password);
      if (!doMatch) {
        return res.status(400).send({ message: "Incorrect Email or Password" });
      } else {
        const token = jwt.sign({ student }, "mySecret", {
          algorithm: "HS256",
        });
        return res.status(200).json({ user: student, token });
      }
    }
  } else {
    const doMatch = await bcrypt.compare(password, teacher.password);
    if (!doMatch) {
      return res.status(400).send({ message: "Incorrect Email or Password" });
    } else {
      const token = jwt.sign({ teacher }, "mySecret", {
        algorithm: "HS256",
      });
      return res.status(200).json({ user: teacher, token });
    }
  }
};

const authLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(400).send({ message: "you are not admin" });
  }
  const token = jwt.sign({ email, password }, "mySecret", {
    algorithm: "HS256",
  });
  return res.status(200).json({ user, token });
};

module.exports = {
  login,
  authLogin,
};
