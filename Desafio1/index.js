// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA ?

// Algoritmo 1
let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
    k = k + 1;
    console.log(`Valor de K: ${k}`)
    soma = soma + k;
    console.log(`Valor de Soma: ${soma}`);
    
}

console.log(soma); // Res: caso 13 = 91, 