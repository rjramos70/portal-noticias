module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req,res){
        // res.render('admin/form_add_noticia', { validacao : {}, noticia: {} });
        // Agora iremos utilizar o controller aqui, já executando a função
        application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);

    });

    application.post('/noticias/salvar', function(req,res){
        
        // Agora iremos utilizar o controller aqui, já executando a função
        application.app.controllers.admin.noticias_salvar(application, req, res);

    });
}