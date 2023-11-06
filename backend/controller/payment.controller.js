const Payment = require("../models/payment.model");

const savepayment = async (req, res) => {
  const { card_name, card_number, amount, expire_date, cvc } = req.body;

  const payment = new Payment({
    card_name,
    card_number,
    amount,
    expire_date,
    cvc,
  });

  const result = await payment.save();
  return res.send(result);
};

const getPayments = async (req, res) => {
  const payments = await Payment.find();
  return res.send(payments);
};

// const deleteDonar = async (req, res) => {
//   const { _id } = req.params;
//   const result = await Donar.findByIdAndDelete({ _id });
//   return res.send(result);
// };

// const editDonar = async (req, res) => {
//   const { _id } = req.params;
//   const result = await Donar.findByIdAndUpdate(_id, req.body);
//   return res.send(result);
// };

const getpaid = async (req, res) => {
  const { _id } = req.params;
  const result = await Payment.findOne({ _id });
  return res.send(result);
};

module.exports = {
  savepayment,
  getPayments,
  getpaid,
};
