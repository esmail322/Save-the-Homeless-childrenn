const jwt = require("jsonwebtoken");

const secretKey = "aljdajx!%%^#3hj";

function createJwt(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: "1d" });
}

module.exports = {
  createJwt,
};
