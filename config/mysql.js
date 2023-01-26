const mysql = require ('mysql');

const connection = mysql.createConnection ({
    host:'localhost',
    database: 'mysqlcrud'
});

module.exports = connection;