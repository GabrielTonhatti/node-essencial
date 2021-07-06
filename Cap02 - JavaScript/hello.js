function testeVar() {
    var a = 1;
    var b = 2;
    var soma = a + b;
    var nome;

    if (nome === undefined) {
        console.log("Teste 1) O nome não foi inicializado.");
    }
    if (typeof (nome) === "undefined") {
        console.log("Teste 2) O nome não foi inicializado.");
    }

    console.log("O tipo do nome é %s e o tipo da soma é %s", typeof (nome), typeof (soma));
    console.log("Olá %s, o resultado da soma é: %d", nome, soma, "que", "legal");
}

// Execute a função testeVar()
testeVar();

// Array

function testeArray() {
    var numeros = [1, 2, 3];
    numeros.push(4) // Adiciona o número 4
    numeros.push(5) // Adiciona o número 5

    for (let i = 0; numeros.length > i; i++) {
        console.log(numeros[i]);    // Imprime cada item do array
    }

    console.log("Outra forma de percorrer um array:")
    for (let i in numeros) {
        console.log(numeros[i])
    }

    console.log("Outra forma de percorrer um array:")
    numeros.map(n => console.log(n));
}

testeArray();

// Hash tables

function testeMap() {
    var map = [];
    map["nome"] = "Gabriel";
    map["sobrenome"] = "Tonhatti";
    console.log(map);
    console.log("Nome completo:", map["nome"], map["sobrenome"])
}

testeMap();

// Classes e Objetos

function objetos1() {
    var pessoa = Object();
    pessoa.nome = "Gabriel";
    pessoa.hello = function () {
        return "Hello Pessoa!";
    }

    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objetos1();

function objetos2() {
    var pessoa = {
        nome: "Gabriel",
        hello: function () {
            return "Hello Pessoa!";
        }
    }
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objetos2();

function Pessoa() {
    this.nome = "Gabriel";
    this.hello = function () {
        return "Hello Pessoa!";
    }
}

function objetos3() {
    var pessoa = new Pessoa();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objetos3();

class Pessoa2 {
    constructor() {
        this.nome = "Gabriel";
    }
    hello() {
        return "Hello Pessoa!";
    }
}

function objetos4() {
    var pessoa = new Pessoa2();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objetos4();

// Programação funcional

function soma(a, b) {
    return a + b;
}

function multiplicacao(a, b) {
    return a * b;
}

// Esta função recebe outra função como parâmetro
function executar(funcao, a, b){
    return funcao(a, b);
}

// A função soma() será executada
let resultado = executar(soma, 1, 2);
// Vai imprimir 3
console.log(resultado);

