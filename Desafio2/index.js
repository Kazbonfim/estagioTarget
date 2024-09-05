const readlineSync = require('readline-sync');

function ehQuadradoPerfeito(x) {
    let s = Math.sqrt(x);
    return s === Math.floor(s); // Retorna verdadeiro se for um quadrado perfeito
}

function ehFibonacci(n) {
    // Testa as duas condições
    return ehQuadradoPerfeito(5 * n * n + 4) || ehQuadradoPerfeito(5 * n * n - 4);
}

// Ínicio
let numero = readlineSync.question('Escreva um valor qualquer... ');

if (ehFibonacci(numero)) {
    console.log(numero + " é um número de Fibonacci.");
} else {
    console.log(numero + " não é um número de Fibonacci.");
}

