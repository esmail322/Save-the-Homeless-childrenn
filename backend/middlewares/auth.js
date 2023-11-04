const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send({ message: "Not Authorized" });
  }
  const token = authorization.split(" ")[1];
  try {
    const ve = jwt.verify(token, "mySecret", { algorithms: "HS256" });
    next();
  } catch (error) {
    return res.status(401).send({ message: "Not Authorized" });
  }
};

module.exports = auth;
