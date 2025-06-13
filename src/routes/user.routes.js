const express = require('express')
const {  makeProduct } = require('../controllers/user_controller')
// const {authMiddleware, userCreationMiddleware } = require('../utils/myMiddleware')
// user controller

const routes = express().router

/*
 * this is the normal get api which give the hi
 *
 */
routes.post('/create', makeProduct)

//

module.exports = { routes }
