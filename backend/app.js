const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const donarRoutes = require("./routes/donar.route");
const studentRoutes = require("./routes/student.route");
const teacherRoutes = require("./routes/teacher.route");
const paymentRoutes = require("./routes/payment.route");
const login = require("./controller/auth.controller");
const auth = require("./middlewares/auth");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.use("/donar", donarRoutes);
app.use("/student", studentRoutes);
app.use("/teacher", teacherRoutes);
app.use("/payment", paymentRoutes);
app.post("/login", login);

app.post("/pay", auth, (req, res, next) => {
  return res.status(200).send({ message: "Login Success" });
});

mongoose.connect("mongodb://127.0.0.1:27017/savethehomeless").then(() => {
  app.listen(8080, () => {
    console.log("server is running");
  });
});
