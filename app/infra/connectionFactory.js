var mysql = require('mysql');

function createDbConnection() {
    if (!process.env.NODE_ENV || process.env.node === 'dev') {
        return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'root',
            database : 'casadocodigo'	
        }); 
    }
    if (process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'root',
            database : 'casadocodigo_test'	
        }); 
    }
    if (process.env.NODE_ENV == 'production') {
        var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
        var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
        return mysql.createConnection({
            host : grupos[3],
            user : grupos[1],
            password : grupos[2],
            database : grupos[4]
        }); 
    }
}


module.exports = function() {
    return createDbConnection;
}