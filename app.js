const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
const mongoConnect = require("./util/database").mongoConnect;
const User = require('./models/user');

app.use(bodyParser.urlencoded({ extended: false }));
//setup a path for static serving images, css, etc.
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById('5ef0bc131b7410ca8b84bcae')
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
  next();
});

//base url is specified here as /admin so they will be considered only starting with that path
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000);
});
