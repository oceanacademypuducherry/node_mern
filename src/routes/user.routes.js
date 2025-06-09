const express = require('express')
const { getAllUsers } = require('../controllers/user_controller')
const { authMiddleware, userCreationMiddleware } = require('../utils/myMiddleware')
// user controller

const routes = express().router

/*
 * this is the normal get api which give the hi
 *
 */
routes.post('/',authMiddleware,userCreationMiddleware, getAllUsers)

//

module.exports = { routes }
