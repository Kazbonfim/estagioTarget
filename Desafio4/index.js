// const readlineSync = require('readline-sync');

// function inverterStrings(string) {
//     const stringInvertida = string.split('').reverse().join('');
//     console.log(stringInvertida);
//     return
// }

// const inputString = readlineSync.question("Escreva um texto qualquer, e vamos inverter seu conteudo...");
// inverterStrings(inputString);

// Ideia: capturar a partir da última letra, até a inicial, e interar em uma nova string a cada letra
const readlineSync = require('readline-sync');

function inverterStrings(string) {
    let stringInvertida = ''; // Pra armazenar os dados recebidos do input
    for (let i = string.length - 1; i >= 0; i--) { // Interando desde a última letra, e add em stringInvertida
        stringInvertida += string[i]; // Resultando em...
    }
    return stringInvertida; // Sucesso!!!
}

const inputString = readlineSync.question("Escreva um texto qualquer, e vamos inverter seu conteudo... ");
const stringInvertida = inverterStrings(inputString);
console.log(`Texto invertido: ${stringInvertida}`); // Espero que sirva, kek
