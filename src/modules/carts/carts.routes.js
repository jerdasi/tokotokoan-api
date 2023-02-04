const express = require("express");
const userVerification = require("../../middleware/auth.user");
const routes = express.Router();

const cartControllers = require('./carts.controller');

routes.get("/", cartControllers.carts);

module.exports = routes;