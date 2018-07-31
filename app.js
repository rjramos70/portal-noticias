// Importa nosso módulo de configuração
var app = require('./config/server');


// Porta na qual o servidor vai estar sendo executado
var runPort = 3000;
// var runPort = require('./config/server').runPort;

// ROTAS são injetadas pelo Consign no arquivo server.js

// Invés de usar o http.createServer para criar o servidor, usando o método listen direto
app.listen(runPort, function(){
	console.log("Servidor ON na porta " + runPort);
});
