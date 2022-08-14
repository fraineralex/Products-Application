const Product = require("../models/Product");

exports.GetIndex = (req, res, next) => {
  //arrow functions
  Product.findAll()
    .then((result) => {
      const products = result.map((result) => result.dataValues);

      res.render("shop/index", {
        pageTitle: "Itla shop",
        prods: products,
        hasProducts: products.length > 0,
        ShopActive: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetProducts = (req, res, next) => {
  //arrow functions
  Product.findAll()
    .then((result) => {
      const products = result.map((result) => result.dataValues);

      res.render("shop/product-list", {
        pageTitle: "Products",
        prods: products,
        hasProducts: products.length > 0,
        ProductsActive: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetCart = (req, res, next) => {
  //arrow functions
  res.render("shop/cart", {
    pageTitle: "Cart",
    CartActive: true,
  });
};

exports.GetOrders = (req, res, next) => {
  //arrow functions
  res.render("shop/orders", {
    pageTitle: "Orders",
    OrdersActive: true,
  });
};

exports.GetCheckout = (req, res, next) => {
  //arrow functions
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    CartActive: true,
  });
};

exports.GetProduct = (req, res, next) => {
  const productId = req.params.productId;

  //arrow functions
  Product.findOne({ where: { id: productId } })
    .then((result) => {
      const product = result.dataValues;

      if (!product) {
        return res.redirect("/");
      }

      res.render("shop/product-details", {
        pageTitle: "detail",
        ProductsActive: true,
        product: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
