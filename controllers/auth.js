const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.getLogin = (req, res, next) => {
  console.log(req.session);
  res
    .render("auth/login", {
      pageTitle: "Login",
      path: "/login",
      isAuthenticated: req.session.isLoggedIn,
    })
    .then((result) => {})
    .catch((err) => {
      console.log(err);
    });
};

exports.postLogin = (req, res, next) => {
  User.findById("5ef1fc89ed5bd34374237a15").then((user) => {
    req.session.isLoggedIn = true;
    req.session.user = user;
    req.session.save((err) => {
      console.log(err);
      res.redirect("/");
    });
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  //TO DO Validation
  User.findOne({ email: email }).then((selection) => {
    if (selection) {
      return res.redirect("/signup");
    }
  });
  return bcrypt
    .hash(password, 12)
    .then((hashedPassword) => {
      const user = new User({
        email: email,
        password: hashedPassword,
        cart: { items: [] },
      });
      return user.save();
    })
    .then((result) => {
      res.redirect("/login");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "Signup",
    isAuthenticated: false,
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
