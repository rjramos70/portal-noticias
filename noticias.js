var http = require('http');		// require anexa outros arquivos ao nosso arquivo corrente;

// Agora precisamos criar e subir um servidor usando a biblioteca 'http'
var server = http.createServer( function(req, res){

	var categoria = req.url;	// recupera o que vem depois de http://localhost:3000/moda, nesse caso moda;
	console.log('categoria: ' + categoria);

	if (categoria == '/tecnologia') {
		res.end("<html><body>Notícias de Tecnologia!</body></html>");
	}else if(categoria == '/moda'){
		res.end("<html><body>Notícias de Moda!</body></html>");
	}else if(categoria == '/beleza'){
		res.end("<html><body>Notícias de Beleza!</body></html>");
	}else{
		res.end("<html><body>Portal de notícias!</body></html>");
	}
		

});

// informar qual a porta 
server.listen(3000);




