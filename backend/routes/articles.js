const express = require("express");
const router = express.Router();
const {postImportArticles} =require('../controllers/articleController')
router.post('/import',postImportArticles);
module.exports = router;