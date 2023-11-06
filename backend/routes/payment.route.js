const express = require("express");
const paymentController = require("../controller/payment.controller");

const router = express.Router();

router
  .route("/")
  .get(paymentController.getPayments)
  .post(paymentController.savepayment);

router.route("/:_id").get(paymentController.getpaid);

module.exports = router;
