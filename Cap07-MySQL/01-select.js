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
// let sql = "select id,nome,tipo from carro";
// connection.query(sql, function(error, results, fields) {
//     if(error) throw error;
//     let carros = results;
//     // Exemplo 1 para fazer for
//     for(let i = 0;i < carros.length; i++) {
//         console.log(carros[i].id + ": " + carros[i].nome);
//     }
// })
// // Fecha a conexão
// connection.end();

// Importar a classe CarroDB
const CarroDB = require('./CarroDB');

let callback = function(carros) {
    // imprime os carros
    for (let i = 0; i < carros.length; i++) {
        console.log(carros[i].id + ': ' + carros[i].nome);
    }
}

CarroDB.getCarros(callback);