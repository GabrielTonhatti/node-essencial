const express = require('express');
const router = express.Router();
const CarroDB = require('../model/CarroDB');

// GET em /carros
router.get('/', function (req, res) {
    CarroDB.getCarros(function (carros) {
        res.json(carros);
    });
});

// GET em /carros/id
router.get('/:id(\\d+)', function(req, res) {
    let id = req.params.id;
    CarroDB.getCarrosById(id, function(carro) {
        res.json(carro);
    });
});

// DELETE em /carros/id
router.delete('/:id(\\d+)', function(req, res) {
    let id = req.params.id;
    console.log("Deletar carro " + id);
    CarroDB.deleteById(id, function(affectedRows) {
        // res.json(carro);
        res.send({ msg: 'Carro deletado com sucesso.' });
    });
});

// GET em /carros/tipo (clássicos, esportivos, luxo)
router.get('/:tipo', function (req, res) {
    let tipo = req.params.tipo;
    CarroDB.getCarrosByTipo(tipo, function (carros) {
        res.json(carros);
    });
});

// GET em /carros/tipo/:tipo (clássicos, esportivos, luxo)
router.get('/tipo/:tipo', function (req, res) {
    let tipo = req.params.tipo;
    CarroDB.getCarrosByTipo(tipo, function (carros) {
        res.json(carros);
    });
});

// POST para salvar um carro
router.post('/', function (req, res) {
    // Carro enviado no formato JSON
    let carro = req.body;
    CarroDB.save(carro, function (carro) {
        res.json(carro);
    });
});

// PUT para atualizar um carro
router.put('/', function (req, res) {
    // Carro enviado no formato JSON
    let carro = req.body;
    CarroDB.update(carro, function (carro) {
        // res.json(carro);
        res.send({ msg: 'Carro atualizado com sucesso.' });
    });
});

// Exporta as rotas para ser utlizado em outro arquivo
module.exports = router;