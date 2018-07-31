module.exports = function(application){
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia");	
	});

	application.post('/noticias/salvar', function(req, res){
		
		// Recebendo os dados do corpo do formulário
		var noticia = req.body;
		// console.log('Corpo noticia: ' + noticia);

		// res.render(noticia);

		// recuperar nossa conexão
		var connection = application.config.dbConnection();

		// recuperar nosso model
		var noticiasModel = application.app.models.noticiasModel;

		// enviar para uma função de salvar a notícia implementando 
		// uma função de callback para direcionar para a página onde 
		// listam as notícias.
		noticiasModel.salvarNoticia(noticia, connection, function(error, result){
			
			// Como nossa notícia foi salva no método, agora devemos somente
			// redirecionar para a página das noticias invés de renderizar a 
			// página.
			res.redirect('/noticias');
			// res.render("noticias/noticias", { noticias : result } );
		});

	
	});
};

