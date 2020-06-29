const path = require("path");
const { check, body } = require("express-validator");

const express = require("express");

const router = express.Router();
const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");

router.get("/add-product", isAuth, adminController.getAddProduct);

router.get("/products", isAuth, adminController.getProducts);

router.post(
  "/add-product",
  isAuth,
  [
    check("title")
      .isLength({ min: 3 })
      .withMessage("Title has to have a value")
      .trim(),
    // body("imageUrl")
    //   .isURL()
    //   .withMessage("the imageUrl cannot be empty"),
    body("price").isFloat().withMessage("price has to have a value"),
    body("description")
      .isLength({ min: 3 })
      .trim()
      .withMessage("the description cannot be empty"),
  ],
  adminController.postAddProduct
);

router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

router.post(
  "/edit-product",
  [
    check("title")
      .isLength({ min: 3 })
      .withMessage("Title has to have a value")
      .trim(),
    // body("imageUrl")
    //   .isURL()
    //   .withMessage("the imageUrl cannot be empty"),
    body("price").isFloat().withMessage("price has to have a value"),
    body("description")
      .isLength({ min: 3 })
      .trim()
      .withMessage("the description cannot be empty"),
  ],
  isAuth,
  adminController.postEditProduct
);

router.post(
  "/delete-product/:productId",
  isAuth,
  adminController.postDeleteProduct
);

module.exports = router;
