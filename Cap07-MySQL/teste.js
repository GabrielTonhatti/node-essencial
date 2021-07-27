var mysql = require('mysql');

// Cria a conexão com MySQL
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'livro',
    password: 'livro123',
    database: 'livro'
});
// Conecta no banco de dados
connection.connect();

let sql = "select id,nome,tipo from carro where tipo = '" + tipo + "'";
connection.query(sql, function(error, results, fields) {
    // A função de callback possui 3 parâmetros:
    // error: ero caso a consulta do SQL seja inválida, por exemplo um erro de sintaxe.
    // results: contém os registros retornados pela consulta, neste caso será a lista de carros.
    // fields: contém informações sobre as colunas retornadas, neste exemplo as colunas id, nome e tipo.
})

// Fecha a conexão
connection.end();