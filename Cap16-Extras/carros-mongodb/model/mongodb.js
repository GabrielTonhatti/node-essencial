const config = require('config');

const MongoCliente = require('mongodb').MongoClient;

const state = {
    db: null,
};
// Conecta no servidor
exports.connect = function (callback){
    if(state.db) return callback();

    // Configurações do mongo
    let mongoConfig = config.get('mongoConfig');
    let mongoServer = mongoConfig.mongoServer;
    let database = mongoConfig.database;

    console.log("Mongo %s, db: %s", mongoServer, database);

    MongoCliente.connect(mongoServer, function (err, client) {
        if(err) return callback(err);
        state.db = client.db('livro');
        callback();
    });
};

// Retorna o objeto da conexão
exports.get = function () {
    return state.db
};
// Fecha a conexão
exports.close = function (done) {
    if(state.db) {
        state.db.close(function (err, result) {
            state.db = null;
            state.mode = null;
            done(err)
        });
    }
};