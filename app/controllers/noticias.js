// Vamos trazer as lógicas dos controllers que estão dentro
// do arquivo 'curso_node/app/routes/noticias.js' para dentro
// desse arquivo controller
module.exports.noticias = function(application, req, res){

	var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection)

    noticiasModel.getNoticias(function(error, result){
        res.render('noticias/noticias', { noticias : result });
    });

}

module.exports.noticia = function(application, req, res){

	var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    // Recuperamos o id_noticia passado como parametro na url
    var id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, function(error, result){
        res.render('noticias/noticia', { noticia : result });
    });
	
}
