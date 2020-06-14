const express = require("express");
const path = require('path');

const route = express.Router();

route.get("/", (req, res, next) => {
  console.log("i'm in another middleware");
  res.sendFile(path.join(__dirname,'../','views','shop.html'));
});

module.exports = route;
