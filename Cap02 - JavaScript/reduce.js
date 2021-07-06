var numeros = [1,2,3];
// Aqui não foi informado o valor inicial
// Neste caso, o primeiro item do array será ignorado e passado como valor inicial
var s = numeros.reduce((valorAcumulado, n) => valorAcumulado + n * 2);
console.log(s);
// Aqui informamos o valor inicial como 0. Neste caso, todos os itens serão processados
s = numeros.reduce((valorAcumulado, n) => valorAcumulado + n * 2, 0);
console.log(s)