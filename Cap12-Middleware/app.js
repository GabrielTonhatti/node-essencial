const express = require('express');
const app = express();
const CarroDB = require('./model/CarroDB');
const bodyParser = require('body-parser');
// Configura para ler dados do POST por form-urlencoded e application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configura uma rota na raiz.
app.get('/', function (req, res) {
    res.send('API dos Carros');
});

// GET em /carros
app.get('/carros', function (req, res) {
    CarroDB.getCarros(function (carros) {
        res.json(carros);
    });
});

// GET em /carros/id
app.get('/carros/:id(\\d+)', function(req, res) {
    let id = req.params.id;
    CarroDB.getCarrosById(id, function(carro) {
        res.json(carro);
    });
});

// DELETE em /carros/id
app.delete('/carros/:id(\\d+)', function(req, res) {
    let id = req.params.id;
    console.log("Deletar carro " + id);
    CarroDB.deleteById(id, function(affectedRows) {
        // res.json(carro);
        res.send({ msg: 'Carro deletado com sucesso.' });
    });
});

// GET em /carros/tipo (clássicos, esportivos, luxo)
app.get('/carros/:tipo', function (req, res) {
    let tipo = req.params.tipo;
    CarroDB.getCarrosByTipo(tipo, function (carros) {
        res.json(carros);
    });
});

// GET em /carros/tipo/:tipo (clássicos, esportivos, luxo)
app.get('/carros/tipo/:tipo', function (req, res) {
    let tipo = req.params.tipo;
    CarroDB.getCarrosByTipo(tipo, function (carros) {
        res.json(carros);
    });
});

// POST para salvar um carro
app.post('/carros', function (req, res) {
    // Carro enviado no formato JSON
    let carro = req.body;
    CarroDB.save(carro, function (carro) {
        res.json(carro);
    });
});

// PUT para atualizar um carro
app.put('/carros', function (req, res) {
    // Carro enviado no formato JSON
    let carro = req.body;
    CarroDB.update(carro, function (carro) {
        // res.json(carro);
        res.send({ msg: 'Carro atualizado com sucesso.' });
    });
});

// Rotas
app.use('/api/carros', require('./routes/carros'));
// Teste de Erro
app.get('/teste_erro', function (req, res) {
    throw Error('Erro Ninja');
})

// Rotas para nãp encontrado '404'
app.use(function (req,res, next) {
    res.status(404);
    res.json({err: "Não encontrado"});
});
//Rota genérica de erro '500'
app.use(function (err, req, res, next) {
// Imprime a stacktrace do erro no console
    console.log(err.stack);
    res.status(500);
    res.json({ erro: "Ocorreu um erro: " + err.message });
})
// Inicia o servidor
const server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Servidor iniciado em http://%s:%s", host, port);
});
