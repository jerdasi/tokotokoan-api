const express = require("express");
const adminVerification = require("../../middleware/admin.only");
const routes = express.Router();

const userVerification = require("../../middleware/auth.user");

const userControllers = require("./user.controller");

routes.get("/", userControllers.users);
routes.get("/:email", userControllers.user);
routes.post("/register", userControllers.register);
routes.post("/login", userControllers.login);

module.exports = routes;
