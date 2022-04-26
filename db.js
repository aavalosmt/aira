
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'db4free.net',
    user: 'airadodero',
    password: 'aira1234',
    database: 'airadodero'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;