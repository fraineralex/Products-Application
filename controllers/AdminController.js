const Product = require("../models/Product");

exports.GetAddProduct = (req, res, next) => {
  res.render("admin/save-product", {
    pageTitle: "Add product",
    AddProductActive: true,
    editMode: false,
  });
};

exports.GetAdminProducts = (req, res, next) => {
  Product.findAll()
    .then((result) => {
      const products = result.map((result) => result.dataValues);

      res.render("admin/product-list", {
        pageTitle: "Admin products",
        AdminProductsActive: true,
        prods: products,
        hasProducts: products.length > 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.PostAddProduct = (req, res, next) => {
  const title = req.body.Title;
  const image = req.body.ImageUrl;
  const price = req.body.Price;
  const description = req.body.Description;

  Product.create({
    title: title,
    imageUrl: image,
    price: price,
    description: description,
  })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetEditProduct = (req, res, next) => {
  const productId = req.params.productId;
  const edit = req.query.edit;

  if (!edit) {
    return res.redirect("/");
  }

  Product.findOne({ where: { id: productId } })
    .then((result) => {
      const product = result.dataValues;

      if (!product) {
        return res.redirect("/");
      }

      console.log(product);

      res.render("admin/save-product", {
        pageTitle: "edit products",
        editMode: edit,
        product: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.PostEditProduct = (req, res, next) => {
  const id = req.body.ProductId;
  const title = req.body.Title;
  const image = req.body.ImageUrl;
  const price = req.body.Price;
  const description = req.body.Description;

  Product.update(
    { title: title, description: description, imageUrl: image, price: price },
    { where: { id: id } }
  )
    .then((result) => {
      return res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.DeleteProduct = (req, res, next) => {
  const id = req.body.ProductId;

  Product.destroy({ where: { id: id } })
    .then((result) => {
      return res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};
