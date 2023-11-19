const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const donarRoutes = require("./routes/donar.route");
const studentRoutes = require("./routes/student.route");
const teacherRoutes = require("./routes/teacher.route");
const paymentRoutes = require("./routes/payment.route");
const authRoutes = require("./routes/auth");
const auth = require("./middlewares/auth");
const Payment = require("./models/payment.model");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.use("/donar", donarRoutes);
app.use("/student", studentRoutes);
app.use("/teacher", teacherRoutes);
app.use("/payment", paymentRoutes);
app.use(authRoutes);

// amount of pay
app.get("/getTotalPayment", async (req, res) => {
  try {
    const payments = await Payment.find();

    // Calculate the total sum of amounts
    const totalAmount = payments.reduce(
      (sum, payment) => sum + payment.amount,
      0
    );

    return res.status(200).json({ totalAmount });
  } catch (error) {
    console.error("Error while fetching payments:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/pay", auth, (req, res, next) => {
  return res.status(200).send({ message: "Login Success" });
});

mongoose.connect("mongodb://127.0.0.1:27017/savethehomeless").then(() => {});
app.listen(8080, () => {
  console.log("server is running");
});
