var mysql = require('mysql');

function createDbConnection() {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'casadocodigo'	
    }); 
}

module.exports = function() {
    return createDbConnection;
}