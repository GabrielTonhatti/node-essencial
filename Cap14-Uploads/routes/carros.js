const express = require('express');
const router = express.Router();
const CarroDB = require('../model/CarroDB');
const exec = require('./utils');

// GET em /carros
router.get('/', exec(async (req, res, next) => {
    let carros = await CarroDB.getCarros();
    res.json(carros);
}));

// GET em /carros/id
router.get('/:id(\\d+)', exec(async (req, res, next) => {
    let id = req.params.id;
    let carro = await CarroDB.getCarrosById(id);
    res.json(carro);
}));

// DELETE em /carros/id
router.delete('/:id(\\d+)', exec(async (req, res, next) => {
    let id = req.params.id;
    let affectedRows = await CarroDB.deleteById(id);
    res.json({msg: affectedRows > 0 ? 'Carro deletado com sucesso.' : "Nenhum carro excluído"});
}));

// GET em /carros/tipo (clássicos, esportivos, luxo)
router.get('/:tipo', exec(async (req, res, next) => {
    let tipo = req.params.tipo;
    let carros = await CarroDB.getCarrosByTipo(tipo);
    res.json(carros);
}));

// GET em /carros/tipo/:tipo (clássicos, esportivos, luxo)
router.get('/tipo/:tipo', exec(async (req, res, next) => {
    let tipo = req.params.tipo;
    let carros = await CarroDB.getCarrosByTipo(tipo);
    res.json(carros);
}));

// POST para salvar um carro
router.post('/', exec(async (req, res, next) => {
//    Carro enviado no formato JSON
    let carro = await CarroDB.save(req.body);
    res.json(carro);
}));

// PUT para atualizar um carro
router.put('/', exec(async (req, res, next) => {
    // Carro enviado no formato JSON
    let carro = await CarroDB.update(req.body);
    res.json({msg: 'Carro atualizado com sucesso.'})
}));

// Exporta as rotas para ser utlizado em outro arquivo
module.exports = router;