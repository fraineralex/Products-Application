const express = require("express");
const path = require('path');
const app = express();
const expressHbs = require("express-handlebars");
const sequelize = require("./context/appContext");
const Products = require("./models/Product");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const errorController = require("./controllers/ErrorController");

app.engine("hbs",expressHbs({layoutsDir:'views/layouts/',defaultLayout: 'main-layout',extname:'hbs'}));
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,"public")));

app.use("/admin",adminRouter);
app.use(shopRouter);

app.use("/", errorController.Get404);

sequelize
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });