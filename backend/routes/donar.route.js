const express = require("express");
const donarController = require("../controller/donar.controller");

const router = express.Router();

router
  .route("/")
  .get(donarController.getDonars)
  .post(donarController.saveDonar);

router
  .route("/:_id")
  .delete(donarController.deleteDonar)
  .get(donarController.getDonar)
  .patch(donarController.editDonar);

module.exports = router;
