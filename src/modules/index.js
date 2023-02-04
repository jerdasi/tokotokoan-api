const express = require("express");
const app = express();

const userRoutes = require("./users/user.routes");
const productRoutes = require("./products/product.routes");
const cartRoutes = require("./carts/carts.routes");

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/carts", cartRoutes);

module.exports = app;
