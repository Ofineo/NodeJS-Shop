const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
const User = require("./models/user");

app.use(bodyParser.urlencoded({ extended: false }));
//setup a path for static serving images, css, etc.
app.use(express.static(path.join(__dirname, "public")));

//middleware to create a static user and pass it in our requests
app.use((req, res, next) => {
  User.findById("5ef1fc89ed5bd34374237a15")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

//base url is specified here as /admin so they will be considered only starting with that path
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://nodeComplete:rYX7GHW1EobK0XFw@node-complete-5hx8z.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Jordi",
          email: "basura@outlook.jp",
          items: [],
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
