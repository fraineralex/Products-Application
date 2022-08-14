const express = require("express");
const path = require("path");

const router = express.Router();

const shopController = require("../controllers/ShopController");

router.get("/", shopController.GetIndex);
router.get("/products", shopController.GetProducts);
router.get("/products/:productId", shopController.GetProduct);
router.get("/orders", shopController.GetOrders);
router.get("/cart", shopController.GetCart);
router.get("/checkout", shopController.GetCheckout);



module.exports = router;