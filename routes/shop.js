//import express
const express = require("express");
const path = require("path");

//import from another file constants,varibles, functions etc.
const adminData = require("./admin");
//create the router mini-app
const router = express.Router();
//use router instead of app
router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});
//export the route so it can be imported in the main app
module.exports = router;

