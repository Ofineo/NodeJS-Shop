const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("i'm in another middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">add title</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  req.body;
  res.redirect("/");
});

module.exports = router;
