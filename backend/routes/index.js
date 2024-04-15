const product = require('./products');
const article = require('./articles');

module.exports = (app) => {
    app.use('/api/product/', product);
    app.use('/api/article/', article);
}