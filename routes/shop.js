//import express
const path = require("path");
const express = require("express");

const productController = require("../controllers/products");
//create the router mini-app
const router = express.Router();
//use router instead of app
router.get("/", productController.getProducts);
//export the route so it can be imported in the main app
module.exports = router;
