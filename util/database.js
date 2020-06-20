const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "@fineo2193", {
  dialect: "mysql",
  host: "localhost",
});

module.exports= sequelize;


