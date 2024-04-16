const pool = require('../utils/DbConnection')


exports.InsertProducts=async(name,price)=>{
    const query = {
        text: 'INSERT INTO tbl_products(name, price) VALUES($1, $2) RETURNING id',
        values: [name, price],
      };
    
      try {
        const result = await pool.query(query);
        const insertedId = result.rows[0].id;
        console.log(`Product inserted with ID: ${insertedId}`);
        return insertedId;
      } catch (err) {
        console.error('Error inserting product:', err);
        return null;
      }
    }
exports.InsertProductArticles=async(product_id,article_id,required_stock)=>{
    const query = {
        text: 'INSERT INTO tbl_product_articles(product_id, article_id,amount_of) VALUES($1, $2,$3)',
        values: [product_id, article_id,required_stock],
      };
      try {
        await pool.query(query);
        return true;
      } catch (err) {
        throw err;
      }
    }
  
exports.getProducts =async()=>{
  const query="SELECT row_to_json(j) FROM ( SELECT p.id, p.name, p.price, json_agg(json_build_object( 'req_articles', p_a.amount_of, 'name', a.name, 'stock', a.stock) ) AS articles FROM tbl_products p JOIN tbl_product_articles p_a ON p.id = p_a.product_id JOIN tbl_articles a ON a.id = p_a.article_id GROUP BY p.id, p.name, p.price) j; ";
  try {
    const {rows} = await pool.query(query);
    let data=[];
    rows.forEach((items)=>{
      data.push(items.row_to_json);
    })
    return data;
  } catch (err) {
    throw err;
  }
}
exports.getProductData=async(product_id)=>{
  const query="SELECT row_to_json(j) FROM ( SELECT p.id, p.name, p.price, json_agg(json_build_object( 'req_articles', p_a.amount_of, 'id', p_a.article_id, 'name', a.name, 'stock', a.stock) ) AS articles FROM tbl_products p JOIN tbl_product_articles p_a ON p.id = p_a.product_id JOIN tbl_articles a ON a.id = p_a.article_id  WHERE p.id='"+product_id+"' GROUP BY p.id, p.name, p.price) j; ";
  try {
    const {rows} = await pool.query(query);
    return rows[0].row_to_json;
  } catch (err) {
    throw err;
  }
}