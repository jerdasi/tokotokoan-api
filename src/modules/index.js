const express = require("express");
const app = express();

const userRoutes = require("./users/user.routes");
const productRoutes = require("./products/product.routes");

app.use("/users", userRoutes);
app.use("/products", productRoutes);

module.exports = app;
