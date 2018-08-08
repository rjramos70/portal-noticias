module.exports.index = function(application, req, res){
	
	// Abre conexão com o banco de dados
	var connection = application.config.dbConnection();
	// Agora vamos instanciar nosso 'model' NoticiasDAO
	var noticiasModel = new application.app.models.NoticiasDAO(connection);
	// Recuperar as ultimas 5 notícias
	noticiasModel.get5UltimasNoticias(function(error, result){
		res.render('home/index', {noticias: result});
	});

	
}