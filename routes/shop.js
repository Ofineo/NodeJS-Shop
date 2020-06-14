const express = require("express");

const route = express.Router();

route.use("/", (req, res, next) => {
  console.log("i'm in another middleware");
  res.send("<h1>Add products page</h1>");
});

module.exports = route;
