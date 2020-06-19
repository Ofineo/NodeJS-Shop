const fs = require("fs");
const path = require("path");

const Product = require("./product");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    //Fetch teh previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      //Analyze the cart=> find existing product
      const existingProductIndex = cart.products.findIndex(
        (item) => item.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      //Add new prodcut || increase the quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty += 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];

      }
      cart.totalPrice += +productPrice;

      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
  static deleteFromCart(id, Productprice) {
    fs.readFile(p, (err, fileContent) => {
      if (err) return;
      const updatedCart = { ...JSON.parse(fileContent) };
      const product = updatedCart.products.find((p) => p.id === id);
      updatedCart.totalPrice =
        updatedCart.totalPrice - product.qty * Productprice;
      updatedCart.products = updatedCart.products.filter((p) => p.id !== id);
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
  static getCart(cb) {
    fs.readFile(p, (err, fileContent) => {
      const cart = JSON.parse(fileContent);
      err ? cb(null) : cb(cart);
    });
  }
};
