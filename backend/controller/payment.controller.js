const mongoose = require("mongoose");
const Payment = require("../models/payment.model");
const Student = require("../models/student.model");
const savepayment = async (req, res) => {
  const {
    card_name,
    card_number,
    amount,
    expire_date,
    cvc,
    donarId,
    studentId,
  } = req.body;
  const payment = new Payment({
    card_name,
    card_number,
    amount,
    expire_date,
    cvc,
    donar: new mongoose.Types.ObjectId(donarId),
  });
  const result = await payment.save();
  await Student.findByIdAndUpdate(
    studentId,
    { donar: new mongoose.Types.ObjectId(donarId) },
    { new: true }
  );
  return res.send(result);
};
const getPayments = async (req, res) => {
  const payments = await Payment.find();
  return res.send(payments);
};
const deletepayment = async (req, res) => {
  const { _id } = req.params;
  const result = await Payment.findByIdAndDelete({ _id });
  return res.send(result);
};
const getpaid = async (req, res) => {
  const { _id } = req.params;
  const result = await Payment.findOne({ _id });
  return res.send(result);
};
module.exports = {
  savepayment,
  getPayments,
  deletepayment,
  getpaid,
};
