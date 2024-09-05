const readlineSync = require('readline-sync');

function inverterStrings(string) {
    const stringInvertida = string.split('').reverse().join('');
    console.log(stringInvertida);
    return
}

const inputString = readlineSync.question("Escreva um texto qualquer, e vamos inverter seu conteudo...");
inverterStrings(inputString);

// Ideia: capturar a partir da última letra, até a inicial, e interar em uma nova string a cada letra