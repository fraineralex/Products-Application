const express = require("express");

const adminController =require("../controllers/AdminController");

const router = express.Router();

router.get("/add-product", adminController.GetAddProduct);

router.post("/add-product", adminController.PostAddProduct);

router.get("/products", adminController.GetAdminProducts);

router.get("/edit-product/:productId", adminController.GetEditProduct); // route params , query params
router.post("/edit-product", adminController.PostEditProduct);

router.post("/delete-product", adminController.DeleteProduct);

module.exports = router;