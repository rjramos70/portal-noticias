// admin controller

//Iniciaremos pelo módulo formulário de inclusão de notícias
module.exports.formulario_inclusao_noticia = function(application, req, res){

	res.render('admin/form_add_noticia', { validacao : {}, noticia: {} });

}


module.exports.noticias_salvar = function(application, req, res){

	var noticia = req.body;

	// Faremos as validações dos dados enviado pelo formulário antes de persistir no banco de dados
	req.assert('titulo', 'O campo título é obrigatório.').notEmpty();
	req.assert('resumo', 'O campo Resumo é obrigatório.').notEmpty();
	req.assert('resumo', 'O campo Resumo deve conter entre 10 e 100 caracteres.').len(10, 100);
	req.assert('autor', 'O campo Nome do Autor é obrigatório.').notEmpty();
	// req.assert('data_noticia', 'O campo Data da Notícia é obrigatório e no formato de date.').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('data_noticia', 'O campo Data da Notícia é obrigatório e no formato de date.').notEmpty().isDate({ format: 'YYYY-MM-DD'});
    req.assert('noticia', 'O campo Notícia é obrigatório.').notEmpty();

    // testando se houveram erros de validação
    var erros = req.validationErrors();

    // Caso haja erro, para o processo e redirecionar para o formulário
    if(erros){

        // redirecionamos para a pagina do formulário
        res.render('admin/form_add_noticia', { validacao : erros, noticia: noticia });

        // Havendo algum erro, para o processo aqui mesmo, impedindo que seja
        // criado conexão com o banco e envio dos dados;
        return;
    }

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result){
        res.redirect('/noticias');
    });

}





