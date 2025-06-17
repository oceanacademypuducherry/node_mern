const { generateJWTtoken } = require("../utils/generateTokent");

const userLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.send({
      message: "username or password required",
      status: false,
    });
  }
  try {
    const user = {
      name: "farhana",
      email: "farahna@gmail.com",
      id: "654asdlk53sakfd354",
    };
    const token = generateJWTtoken(user);
    res.send({
      message: "login successfully",
      token,
      status: true,
    });
  } catch (error) {
    res.send({
      message: error.toString(),
      status: false,
    });
  }
};

module.exports = {
  userLogin,
};
