const dbConnection = require('../utils/DbConnection');
const { InsertProducts, InsertProductArticles, getProducts, getProductData } = require('../models/productModel')
const { UpdateStock } = require('../models/articleModel')
exports.postCreateProduct = async (req, res, next) => {
  const data = req.body;
  try {
    data.forEach(async (list, key) => {
      let productId = await InsertProducts(list.name, list.price);
      let productArticles = list.contain_articles //InsertProductArticles
      productArticles.forEach(async (articles) => {
        await InsertProductArticles(productId, articles.art_id, articles.amount_of);
      })
    })
    res.send({ 'message':'Successfully imported' }).status(200)
  }
  catch (err) {
    res.send({'message' :err.message}).status(500);
  }

}

exports.fetchProducts = async (req, res, next) => {
  const list = await getProducts();
  list.forEach((produts) => {
    let avg= []
    let articles = produts.articles;
    articles.forEach((list) => {
        const avgArticle =list.stock/list.req_articles
       avg.push(avgArticle)
    })
    const minMax = avg.reduce((prev, curr) => ({
      min: Math.min(prev.min, curr),
   }), { min: Infinity });
   produts['avl_qty']=Math.round(minMax.min);
  });
  res.send({ 'products': list }).status(200)
}
exports.postBookProduct = async (req, res, next) => {
  const { product_id ,qty} = req.body;
  try {
    const product = await getProductData(product_id);
    product.articles.forEach(async (article) => {
      let freshStock = article.stock - (article.req_articles*qty);
      let response = await UpdateStock(freshStock, article.id);
    });
    res.send({'message':'Successfully booked'}).status(200);
  }
  catch(err){
    // throw err;
    res.send({'message' :err.message}).status(500);
  }

}
