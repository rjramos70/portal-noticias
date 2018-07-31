// vamos incorporar o modulo mysql para acesso ao banco de dados
var mysql = require('mysql');

var connMySQL = function(){
		console.log('Conexao com o BD foi estabelecida');

		// Estabelecer a conexão com o banco de dados
		return mysql.createConnection({
			host : 'localhost',				// nesse caso o loopback local 
			user : 'root',					// login
			password : 'root',				// senha
			database : 'portal_noticias'	// schema/database
		});
};

module.exports = function(){
	console.log('O autoload carregou o módulo de conexão com o BD.');
	return connMySQL;	// retorna a variavel evitando que seja uma função executada pelo Consign
};