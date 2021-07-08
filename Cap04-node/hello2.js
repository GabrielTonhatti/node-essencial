// Carrega os módulos HTTP
var http = require('http');
var url = require('url');
// Função de caççback para o servidor HTTP
var callback = function (request, response) {
    // Define o cabeçalho (header) com o tipo da resposta
    response.writeHead(200, { "Content-Type": "text/palin"});
    // Faz o parser da URL separando o caminho (rota)
    var parts = url.parse(request.url);

    // Verifica a rota
    if(parts.path == '/') {
        response.end("Site na raiz.");
    } else if (parts.path == '/carros') {
        response.end("Você digitou a rota /carros.");
    } else {
        response.end("Rota inválida: " + parts.path);
    }
};

// Cria um servidor HTTP que vai responder  "Hello World" para todas as requisições
var server = http.createServer(callback);
// Porta que o servidor vai escutar
server.listen(3000);
// Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/")