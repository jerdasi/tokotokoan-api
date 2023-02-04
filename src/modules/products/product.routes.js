const express = require("express");
const userVerification = require("../../middleware/auth.user");
const routes = express.Router();

const producstControllers = require("./product.controllers");

routes.get("/", producstControllers.products);
routes.post("/", userVerification, producstControllers.add);

module.exports = routes;
