const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(title, price, description, imageUrl);
  product
    .save()
    .then((result) => {
      console.log("created product");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect("/");
//   }
//   const prodId = req.params.productId;
//   // Product.findByPK(prodId)
//   // Product.findOne({
//   //   where: {
//   //     id: prodId,
//   //   },
//   // })
//   req.user
//     .getProducts({ where: { id: prodId } })
//     .then((products) => {
//       if (!products) {
//         return redirect("/");
//       }
//       res.render("admin/edit-product", {
//         pageTitle: "Edit Product",
//         path: "/admin/edit-product",
//         editing: editMode,
//         product: products[0],
//       });
//     })
//     .catch((err) => console.log(err));
// };

// exports.postEditProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   const title = req.body.title;
//   const imageUrl = req.body.imageUrl;
//   const description = req.body.description;
//   const price = req.body.price;
//   Product.findOne({
//     where: {
//       id: prodId,
//     },
//   })
//     .then((product) => {
//       product.title = title;
//       product.imageUrl = imageUrl;
//       product.description = description;
//       product.price = price;
//       return product.save();
//     })
//     .then((result) => {
//       console.log("UPDATED PRODUCT");
//       res.redirect("/admin/products");
//     })
//     .catch((err) => console.log(err));
// };

// exports.postDeleteProduct = (req, res, next) => {
//   const prodId = req.params.productId;
//   Product.findByPk(prodId)
//     .then((product) => {
//       return product.destroy();
//     })
//     .then((result) => {
//       console.log("DELETED PRODUCT");
//       res.redirect("/admin/products");
//     })
//     .catch((err) => console.log(err));
// };

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Products",
      path: "/admin/products",
    });
  });
};
