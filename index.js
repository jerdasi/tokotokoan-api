const express = require("express");
const app = express();
const allRoutes = require("./src/modules");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1", allRoutes);
require("./src/config/database.connection");
app.listen(3031, () => {
  console.log("server berjalan");
});
