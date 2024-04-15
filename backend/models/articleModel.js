const pool = require('../utils/DbConnection')

exports.ImportArticle=async(name,stock,id)=>{
    const query = {
        text: 'INSERT INTO tbl_articles(name, stock,id) VALUES($1, $2,$3) RETURNING id',
        values: [name, stock,id],
      };
      try {
        const result = await pool.query(query);
        const insertedId = result.rows[0].id;
        console.log(`Article inserted with ID: ${insertedId} ${name}`);
        return insertedId;
      } catch (err) {
        console.error('Error inserting Article:', err);
        throw err;
      }
    }
exports.UpdateArticleStock=async(stock,id)=>{
    const query ="UPDATE tbl_articles SET stock=$1 WHERE id = $2";
    try {
        await pool.query(query, [stock,id]);
        return true;
      } catch (err) {
        throw err;
      }
}