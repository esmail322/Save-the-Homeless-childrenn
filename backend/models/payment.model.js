const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  card_name: String,
  card_number: Number,
  amount: Number,
  expire_date: Date,
  cvc: Number,
  donar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Donar",
  },
});

const Payment = mongoose.model("Payment", Schema);

module.exports = Payment;
