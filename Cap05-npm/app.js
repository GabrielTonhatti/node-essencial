// Script inicial do projeto
// Carrega os módulos HTTP
var http = require('http');
var url = require('url');
var fs = require('fs');
// Função para ler um arquivo e escrevê-lo na response
function readFile(response, file) {
    // Faz a leitura do arquivo de forma assíncrona
    fs.readFile(file, function(err, data) {
        // Quando ler, escreve na response o conteúdo do arquivo JSON
        response.end(data);
    });
}
// Função de callback para o servidor HTTP
var callback = function (request, response) {
    // Define o cabeçalho (header) com o tipo da resposta + UTF-8 como charset
    response.writeHead(200, { "Content-Type": "application/json; charsert=utf-8"});
    // Faz o parser da URL separando o caminho (rota)
    var parts = url.parse(request.url);
    var path = parts.path;

    // Verifica a rota
    if(path == '/carros/classicos') {
        // Retorna o JSON dos carros clássicos
        readFile(response, "classicos.json");
    } else if (path == '/carros/esportivos') {
        // Retorna o JSON dos carros esportivos
        readFile(response, "esportivos.json");
    } else if (path == '/carros/luxo') {
        // Retorna o JSON dos carros de luxo
        readFile(response, "luxo.json");
    } else {
        response.end("Path não mapeado: " + path);
    }
};

// Servidor HTTP
var server = http.createServer(callback);
// Porta que o servidor vai escutar
server.listen(3000);
// Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/")