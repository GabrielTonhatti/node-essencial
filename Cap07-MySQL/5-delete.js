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

// // SQL para excluir o carro;
// let sql = "delete from carro where id = ?";
// let id = 32;
// connection.query(sql,id, function(error, results, fields) {
//     if(error) throw error;
//     console.log("Carro deletado com sucesso.")
//     console.log("Qtde de registros atualizados: " + results.affectedRows)
// });
// // Fecha a conxeão
// connection.end();

// Importar a classe CarroDB
const CarroDB = require('./CarroDB');
// Objeto carro em JSON (para excluir, precisamos apenas do id)
var carro = { id: 34};
CarroDB.delete(carro, function(carro) {
    // Imprime os dados do carro
    console.log("Carro Deletado: " + carro.id);
});