// Carrega os módulos
var http = require("http");
var url = require("url");
const Pessoa = require('./pessoa');

// Funçã ode callback para o servidor HTTP
function callback(request, response) {
    // Faz o parser da URL separando o caminho (path)
    var parts = url.parse(request.url);
    var path = parts.path;
    // Configura o tipo de retorno para applicattion/json
    response.writeHead(200, { "Content-Type": "applicattion/json; charset=utf-8" });
    // Verifica o path
    if (path == '/teste') {
        // Cria um array
        var pessoas = [];
        // Cria 2 objetos do tipo pessoa
        var p1 = new Pessoa("Gabriel", "Tonhatti");
        var p2 = new Pessoa("Steve", "Jobs");
        // Adiciona os objetos no array
        pessoas.push(p1);
        pessoas.push(p2);
        // Converte o array para string no formato JSON
        var json = JSON.stringify(pessoas);
        // Escreve o JSON na resposta (response) da requisição HTTP
        response.end(json);
    } else {
        response.end("Not found: " + path);
    }
}

// Cria um servidor HTTP que vai receber "Hello World" para todas as requisições
var server = http.createServer(callback);
// Porta que o servidor vai escutar
server.listen(3000);
// Mensagem ao inicair o servidor
console.log("Servidor iniciado em http://localhost:3000/");