const express = require("express");
const { createOrder } = require("../controllers/order_controller");
const { verifyToken } = require("../middleware/authMiddleware");
const routes = express().router;

routes.post("/create", verifyToken, createOrder);

module.exports = { routes };
