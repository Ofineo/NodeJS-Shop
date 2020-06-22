//import express
const path = require("path");
const express = require("express");

const shopController = require("../controllers/shop");
//create the router mini-app
const router = express.Router();
//use router instead of app
router.get("/", shopController.getIndex);

router.get('/products', shopController.getProducts)

router.get('/cart',shopController.getCart)

router.post('/cart',shopController.postCart)

// router.get('/checkout',shopController.getCheckout)

router.get("/product/:productId", shopController.getProduct);

// router.get('/orders',shopController.getOrders);

router.post('/cart-delete-item',shopController.postdeleteCartItem);

// router.post('/create-order',shopController.postOrder);

//export the route so it can be imported in the main app
module.exports = router;
