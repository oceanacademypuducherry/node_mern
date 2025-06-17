const jwt = require("jsonwebtoken");
require("dotenv").config();
function generateJWTtoken(user) {
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: "1m",
  });
  console.log(token);
  return token;
}

module.exports = {
  generateJWTtoken,
};
