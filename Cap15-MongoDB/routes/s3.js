const AWS = require('aws-sdk');
let accessKey = 'AKIAUI6FSO3U7L6OIEEX';
let secretKey = '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';
let bucket = 'livro-node';
// Classe utilitária para enviar arquivos para o S3
class S3Helper {
    /*
     * Faz upload
     *
     * @param buffer - buffer binário do arquivo
     * @param path - caminho no qual o arquivo será salvo no S3
     */

    static upload(buffer, path) {

        // Configura as chaves de acesso
        AWS.config.update({ accessKeyId: accessKey, secretAccessKey: secretKey });

        // Cria o objeto do S3
        let s3 = new AWS.S3();

        // Adiciona o arquivo no bucket livro-node-essencial
        s3.putObject({
            Bucket: bucket,
            Key: path,
            Body: buffer,
            ACL: 'public-read',
            ContentType: 'image/jpeg'
        }, function (resp) {
            console.log('Arquivo enviado com sucesso. ' + resp);
        });
    }
}

module.exports = S3Helper;