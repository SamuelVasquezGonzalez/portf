const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'be22882af9fc37',
    password: 'bf89960b',
    database: 'heroku_63bc1e280ec7367'
});


module.exports = mysqlConnection;