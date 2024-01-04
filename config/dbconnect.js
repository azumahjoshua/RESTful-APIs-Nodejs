const mysql = require('mysql');

const {
    DB_PORT,
    DB_HOST,
    DB_USER,
    DB_PASS,
    MYSQL_DB
} = process.env;

const pool = mysql.createPool({
    port: DB_PORT,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: MYSQL_DB,
    connectionLimit: 10
});

module.exports = pool;
