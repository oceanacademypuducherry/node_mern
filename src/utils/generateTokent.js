const jwt = require("jsonwebtoken");
require("dotenv").config();
function generateJWTtoken(user) {
  try {
    console.log(user, "payload");
    const token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "2m",
    });
    console.log(token);
    return token;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = {
  generateJWTtoken,
};
