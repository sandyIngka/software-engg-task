const {ImportArticle} =require('../models/articleModel')
exports.postImportArticles = async (req, res, next) => {
    const data=req.body;
    try{
        data.forEach(async (article) => {
            await ImportArticle(article.name,article.stock,article.art_id)
        });
        res.send({ 'message':'Successfully imported' }).status(500)
    }
    catch(err){
        res.send({'message' :err.message}).status(500);
    }
        
  }