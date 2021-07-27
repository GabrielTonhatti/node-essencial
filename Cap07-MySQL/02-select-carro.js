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

// // Cria uma consulta
// let sql = "select id,nome,tipo from carro where id = ?";
// let id = 11;
// connection.query(sql, id, function(error, results, fields){
//     if(error) throw error;
//     if(results.length == 0) {
//         console.log("Nenhum carro encontrado.")
//         return
//     }

//     // O carro está na 1º posição do array
//     let carros = results[0];
//     console.log(carros.id + ": " + carros.nome);
// });
// // Fecha a conexão
// connection.end();

// Importar a classe CarroDB
const CarroDB = require('./CarroDB');
CarroDB.getCarrosById(11, function(carro) {
    // Imprime os dados do carro
    console.log(carro.id + ': ' + carro.nome);
});