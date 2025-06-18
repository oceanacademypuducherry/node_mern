const express = require("express");
const { userLogin, registerUser } = require("../controllers/auth_controller");

// const {authMiddleware, userCreationMiddleware } = require('../utils/myMiddleware')
// user controller

const routes = express().router;

routes.post("/login", userLogin);

routes.post("/register", registerUser);

/*
 * this is the normal get api which give the hi
 *
 */
// routes.post('/create', makeProduct)

//

module.exports = { routes };
