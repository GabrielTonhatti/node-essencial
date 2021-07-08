// Carrega o módulo HTTP
var http = require('http');
// Função de caççback para o servidor HTTP
var callback = function (request, response) {
    // Define o cabeçalho (header) com o tipo da resposta
    response.writeHead(200, { "Content-Type": "text/palin"});
    // Mensagem de retorno
    response.end("Hello World Node Callback!\n");
};

// Servidor HTTP
var server = http.createServer(callback);
// Porta que o servidor vai escutar
server.listen(3000);
// Mensagem ao iniciar o servidor
console.log("Servidor iniciado...");