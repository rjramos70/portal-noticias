
module.exports = function(application){

	application.get('/noticia', function(req, res){

		// Como estamos passando nossa conexao pelo paramentro 'app',
		// vamos pegar nossa dbConnection por esse parametro.
		var connection = application.config.dbConnection();	// recebe a função já a executando

		// carrega a model 'noticiasModel.js'
		var noticiasModel = application.app.models.noticiasModel;

		// Executa a função do model
		noticiasModel.getNoticia(connection, function(error, result){
			// envia para quem fez a requisição o resultado da consulta para nossa view passando o resultado
			res.render("noticias/noticia", { noticia : result });	
		});

	});
	
};