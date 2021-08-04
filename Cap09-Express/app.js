const express = require('express');
let app = express();
// Permite ler os parâmetros do tipo form-urlencoded
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
// Configura para ler o tipo application/json
app.use(bodyParser.json());

// GET em /pessoa
app.get('/pessoa', function (req, res) {
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    res.status(200).type("text");
    res.send(nome + " " + sobrenome);

});

app.get('/pessoa/:id', function (req, res) {
    let id = req.params.id;
    res.send("Buscar a pessoa: " + id);
});

app.get('/pessoa/nome/:nome/sobrenome/:sobrenome', function (req, res) {
    let nome = req.params.nome;
    let sobrenome = req.params.sobrenome;
    res.send(nome + ' ' + sobrenome);
});

// POST em /pessoa
app.post('/pessoa', function (req, res) {
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;

    // Testa o valor do cabeçalho content-type
    if (req.is("json")) {
        // Se for JSON
        res.json({ nome: nome, sobrenome: sobrenome } );
    } else {
        // Caso contrário envia como texto (text/plain)
        res.type("text").send("Texto: " + nome + " " + sobrenome);
    }

});

// Inicia o servidor
let server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Servidor inciado em http://%s:%s", host, port);
});