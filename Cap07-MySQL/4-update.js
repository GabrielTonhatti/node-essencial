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

// // SQL para atualizar o carro
// let sql = "update carro set ? where id = ?";
// // Objeto carro em JSON
// var json = { id: 32, nome: "Meu Carro Update", tipo: "esportivo"};
// let id = json.id;
// connection.query(sql, [json, id], function(error, results, fields) {
//     if(error)  throw error;
//     console.log("Carro atualizado com sucesso.");
//     console.log("Qtde de registros atualizados: " + results.affectedRows);
// });

// connection.end();

// Importar a classe CarroDB
const CarroDB = require('./CarroDB');
// Objeto carro em JSON
var carro = { id: 32, nome: "Meu Carro Update", tipo: "esportivo" };
CarroDB.update(carro, function (carro) {
    // Imprime os dados do carro
    console.log("Carro Atualizado: " + carro.id + ': ' + carro.nome);
});