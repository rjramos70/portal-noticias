// Trabalhando com OO em JavaScript, 
// criaremos uma classe Noticias
function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
        this._connection.query('SELECT * FROM noticias ORDER BY data_criacao desc', callback);
    }


NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
        this._connection.query('SELECT * FROM noticias WHERE id_noticia = ' + id_noticia.id_noticia, callback);
    }


NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
        // console.log(noticia);
        this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
    }

// Busca as ultimas 5 notícias com base na data de criação
NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
        this._connection.query('SELECT * FROM noticias ORDER By data_criacao DESC LIMIT 5', callback);
    }

module.exports = function(){
    return NoticiasDAO;
}
