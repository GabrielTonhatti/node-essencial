const CarroDB = require('./model/CarroDB');

function teste() {
    // promise
    let promise = CarroDB.getCarros();
    promise.then(function (carros) {
        console.log(JSON.stringify(carros))
    })
}
teste();