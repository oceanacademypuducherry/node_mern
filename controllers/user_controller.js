const { makeUser } = require('../models/user.model')

function getUsers (req, res) {}

const getAllUsers = (req, res) => {
  try {
    const user = req.body
    console.log(user,".....");
    const newUser = makeUser(user)
    
    res.send({ message: 'hello', user: newUser })
  } catch (error) {
    res.status(400).send({ message: error.toString() })
  }
}

module.exports = {
  getUsers,
  getAllUsers
}
