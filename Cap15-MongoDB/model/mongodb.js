const MongoCliente = require('mongodb').MongoClient;
//URL de conexão com o servidor
const mongoServer = 'mongodb://localhost:27017/';
const state = {
    db: null,
};
// Conecta no servidor
exports.connect = function (callback){
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