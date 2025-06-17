const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    res.send({ message: "please provide authorization header" });
  }
  const { authorization } = req.headers;
  const authorizationList = authorization.split(" ");
  const isBearer = authorizationList[0].startsWith("Bearer");
  const token = authorizationList[1];
  if (!isBearer || !token) {
    return res.send({ message: "please give the token" });
  }
  try {
    console.log(process.env.JWT_SECRET);
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.id = user.id;
    next();
  } catch (error) {
    res.send({ message: error.toString() });
  }
  //   console.log(headers);
  res.send({ message: "token is verifying" });
}

module.exports = {
  verifyToken,
};
