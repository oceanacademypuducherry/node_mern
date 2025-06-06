const express = require('express')
const { getAllUsers } = require('../controllers/user_controller')
// user controller

const routes = express().router

/*
 * this is the normal get api which give the hi
 *
 */
routes.post('/', getAllUsers)

//

module.exports = { routes }
