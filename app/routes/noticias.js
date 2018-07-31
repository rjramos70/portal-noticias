
module.exports = function(application){

	application.get('/noticias', function(req, res){

		// Como estamos passando nossa conexao pelo paramentro 'app',
		// vamos pegar nossa dbConnection por esse parametro.
		var connection = application.config.dbConnection();	// recebe a função já a executando

		// COmo os models já foram carregados no auto load e depois injetdas na variavel 'app',
		// iremos pegar a 'model' dessa variavel.
		// Onde:
		// 		aplication.app.models.noticiasModel; ==> variavel.pasta raiz.pasta dos modelos.módulo sem .js
		var noticiasModel = application.app.models.noticiasModel;

		noticiasModel.getNoticias(connection, function(error, result){
			// envia para quem fez a requisição o resultado da consulta para nossa view passando o resultado
			res.render("noticias/noticias", { noticias : result });	
		});

		// feita a conexão, podemos executar consultas SQLs dentro do banco
		// para essa consulta é necessário dois parametros, o primeiro o SQL em sí
		// e o segundo uma função de callback que diz o que vai ser feito após a 
		// consulta ser realizada.
		//
		// Modelo: connection.query(<sql>, function(error, result){});
		// connection.query('SELECT * FROM noticias', function(error, result){
			// envia para quem fez a requisição o resultado da consulta para nossa view passando o resultado
			//res.render("noticias/noticias", { noticias : result });	
		//});

	});
	
};