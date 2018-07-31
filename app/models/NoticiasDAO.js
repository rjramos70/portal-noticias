// Trabalhando com OO em JavaScript, 
// criaremos uma classe Noticias
function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
        this._connection.query('SELECT * FROM noticias', callback);
    }


NoticiasDAO.prototype.getNoticia = function(callback){
        this._connection.query('SELECT * FROM noticias WHERE id_noticia = 2', callback);
    }


NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
        this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
    }


module.exports = function(){
    return NoticiasDAO;
}

/*

module.exports = function(){

    this.getNoticias = function(connection, callback){
        connection.query('SELECT * FROM noticias', callback);
    }

    this.getNoticia = function(connection, callback){
        connection.query('SELECT * FROM noticias WHERE id_noticia = 2', callback);
    }

    this.salvarNoticia = function(noticia, connection, callback){
        connection.query('INSERT INTO noticias SET ?', noticia, callback);
    }

    return this;

}

*/