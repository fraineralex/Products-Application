const Sequelize = require("sequelize");

const sequelize = require("../context/appContext");

const Products = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

module.exports = Products;

