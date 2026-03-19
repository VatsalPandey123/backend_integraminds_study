const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
console.log("productcontroller:",productcontroller);

router
    .route("/products")
    .get(productController.getProducts)
    .post(productController.addProducts);

module.exports = router