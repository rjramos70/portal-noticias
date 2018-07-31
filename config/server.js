// Configurações estruturais de nossa aplicação
var express = require('express');	// recuperando a biblioteca do 'express'

// Iniciando a instancia do Consign para organizarmos as rotas
var consign = require('consign');

// Executa a função do 'express' retornando para uma variavel
var app = express();	// Executando a função do 'express'

// Incluir módulo do body-parser
var bodyParser = require('body-parser');




// Informa ao express qual o view engine, vai ser o ejs
// desa forma o express já sabe que o ejs vai ser nosso motor de views.
app.set('view engine', 'ejs');

// Seta o diretório das views padrão
app.set('views', './app/views');


// Parametrizar o módulo body-parser, como ele esta sendo
// incluído como um middleware, nós precisamos já parametrizar
// como que ele vai tratar os nossos formulários
app.use(bodyParser.urlencoded({extended : true}));	// extended: true, nos permite tratar através de JSon as nossas URLs já codificadas



// Dizer ao Consign onde se localiza o diretorio router para o 'express'
// Injeta em nosso 'app' do express nossas rotas com o Consign informando que a nossa
// pasta 'routes' é onde estão localizados as nossas rotas e inclui em nosso servidor.
consign()
	.include('app/routes')			// inclui as rotas
	.then('config/dbConnection.js')	// inclui a conexão dbConnection.js
	.then('app/models')				// nclui nossos modelos
	.into(app);


// Modulo(s) expostos
module.exports = app;