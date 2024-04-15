const { Client, Pool } = require('pg');

const connect = new Pool({
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: 5432
})
connect.connect();
module.exports = connect;