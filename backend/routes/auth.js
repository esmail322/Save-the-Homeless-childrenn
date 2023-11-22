const express = require("express");
const donarController = require("../controller/donar.controller");
// const auth = require("../middlewares/auth");
const { authLogin, login } = require("../controller/auth.controller");

const router = express.Router();

router.route("/login").post(login);
router.route("/auth/login").post(authLogin);

module.exports = router;
