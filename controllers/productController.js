// const products = require("../modules/productmodules");

const product = ["iphone", "samsung", "oneplus", "redmi"];

exports.getProducts = (req, res) => {
    res.json(product);
};

exports.addProduct = (req, res) => {
    const product = req.body;
    console.log("product:", product);
    res.json({ message: "Product added successfully", product });
};