const Sequelize = require("sequelize");
const path = require("path");

/* const sequelize = new Sequelize("heroesapp", "root", "1234", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
}); */

const sequelize = new Sequelize("sqlite::memory:", {
  dialect: "sqlite",
  storage: path.join(path.dirname(require.main.filename),"database","heroesapp.sqlite"),
}); 

module.exports = sequelize;
