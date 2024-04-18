const {ImportArticle,UpdateStock} =require('../models/articleModel')
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
exports.updateArticleStock=()=>{
    const data =[
        {'id':1,'stock':12},
        {'id':2,'stock':17},
        {'id':3,'stock':2},
        {'id':4,'stock':1},
    ];
    data.map(async(art)=>{
        await UpdateStock(art.stock,art.id);
    });
    return;
  }