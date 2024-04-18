const express = require("express");
const router = express.Router();
const {postImportArticles,updateArticleStock} =require('../controllers/articleController')
router.post('/import',postImportArticles);
router.get('/update_stock',updateArticleStock);
module.exports = router;