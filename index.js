const express = require('express')
require('dotenv').config()
const userRoutes = require('./src/routes/user.routes')
const mongoose = require('mongoose')

//  initialize app
const app = express()
app.use(express.json())

const uri = process.env.MONGO_URI

let connection = null

async function makeConnection () {
  if (!connection) {
    connection = await mongoose.connect(uri);
    return connection;
  } else {
    return connection;
  }
}

app.use(async (_, res, next) => {
  try {
    console.log('connection hiited')
    await makeConnection()
    next()
  } catch (error) {
    throw error
  }
})

// server listener
const portNo = process.env.PORT_NO || 3000
//  user routes
app.use('/product', userRoutes.routes);

app.listen(portNo, err => {
  if (err) {
    console.log(err)
  }
  console.log(`http://localhost:${portNo}`)
})
