// cria o módulo que irá exportar ua lógica que permita fazer a consulta 
// da tabela 'noticias' no banco de dados.
module.exports = function(){

	// retorna a lista de notícias
	this.getNoticias = function(connection, callback){
		connection.query('SELECT * FROM noticias', callback);
	};

	// método que retorna uma notícia especifica
	this.getNoticia = function(connection, callback){
		connection.query('SELECT * FROM noticias WHERE id_noticia = 2', callback);
	};

	// método que insere uma notícia no banco de dados
	this.salvarNoticia = function(noticia, connection, callback){
		// insert no MySQL aceita passar a notícia como JSon direto para
		// o SET da query.
		// Neste caso é fundamental que o JSon possua como rótulo das
		// variáveis o mesmo nome que as colunas da tabela.
		
		// console.log('noticia: ' + noticia);

		connection.query('insert into noticias set ?', noticia, callback );
	};

	return this;

};



