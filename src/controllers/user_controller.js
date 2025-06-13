const { ProductModel } = require('../models/product.model')
const { makeUser } = require('../models/user.model')

function getUsers (req, res) {}

const getAllUsers = (req, res) => {
  try {
    const { data } = req
    console.log(data, '.....')
    const newUser = makeUser(data)
    res.send({ message: 'hello', user: newUser })
  } catch (error) {
    res.status(400).send({ message: error.toString() })
  }
}

const makeProduct = async (req, res) => {
  const body = req.body
  console.log(body)
  const { name, amount } = req.body
  try {
    const data = await ProductModel.insertOne({
      name,
      amount
    })
    res.send({ data })
  } catch (error) {
    res.send({ message: error.toString() })
  }
}

module.exports = {
  getUsers,
  getAllUsers,
  makeProduct
}
