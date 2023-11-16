const express = require("express");
const paymentController = require("../controller/payment.controller");

const router = express.Router();

router
  .route("/")

  .get(paymentController.getPayments)
  .delete(paymentController.deletepayment)
  .post(paymentController.savepayment);

router.route("/:_id").delete(paymentController.deletepayment);

module.exports = router;
