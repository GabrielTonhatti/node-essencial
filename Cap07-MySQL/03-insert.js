// // Carrega o módulo do MySQL
// const mysql = require('mysql');
// // Cria a conexão com MySQL
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'livro',
//     password: 'livro123',
//     database: 'livro'
// });
// // Conecta no banco de dados
// connection.connect();

// // SQL para inserir o carro
// let sql = "insert into carro set ? ";
// // Objeto carro em json
// var carro = { nome: "Meu Carro", tipo: "esportivo" };
// connection.query(sql, carro, function (error, results, fields) {
//     if(error) throw error;
//     console.log("Carro salvo com sucesso, id: " + results.insertId);
// });
// // Fecha a conexão
// connection.end();

// Importar a classe CarroDB
const CarroDB = require('./CarroDB');
// Objeto carro em JSON
var carro = { nome: "Meu Carro", tipo: "esportivo" };
CarroDB.save(carro, function(carro) {
    // Imprime os dados do carro
    console.log("Carro Salvo: " + carro.id + ": " + carro.nome);
});