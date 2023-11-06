const express = require("express");
const donarController = require("../controller/donar.controller");
const auth = require("../middlewares/auth");

const router = express.Router();

router.route("/login").post(auth);
router.route("/auth/login").post(authLogin);

module.exports = router;
