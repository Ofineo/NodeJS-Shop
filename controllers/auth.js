const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  console.log(req.session);
  res
    .render("auth/login", {
      pageTitle: "Login",
      path: "/login",
      isAuthenticated: false,
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postLogin = (req, res, next) => {
  User.findById("5ef1fc89ed5bd34374237a15").then((user) => {
    req.session.isLoggedIn = true;
    req.session.user = user;
    res.redirect("/");
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
