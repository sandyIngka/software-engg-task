const express = require("express");
const router = express.Router();
const {postCreateProduct,fetchProducts,postBookProduct} =require('../controllers/productController')
router.post('/create',postCreateProduct);
router.post('/book',postBookProduct);
router.get('/fetch',fetchProducts);
module.exports = router;