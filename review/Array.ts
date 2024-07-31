import readlinesync = require("readline-sync");

// Definindo um Vetor com valores pré definidos
let arrayNumerosFixos: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Definindo um Vetor vazio, com tamanho inicial de 5 posições
let arrayNumeros: Array<number> = new Array<number>(5);

/* Leitura de dados via teclado - Vetor */
for(let contador = 0; contador < arrayNumeros.length; contador++){
    arrayNumeros[contador] = readlinesync.questionInt('Digite um numero: ')
}

/* Exibição do dados aramzenados no Vetor */
for(let contador = 0; contador < arrayNumeros.length; contador++){
    console.log(`Na posição ${contador} está armazenado o valor ${arrayNumeros[contador]}`)
}

console.table(arrayNumeros);

/* Exibição do dados armazenados no Vetor */
for(let numero of arrayNumeros){
    console.log(numero)
}

for(let numero of arrayNumerosFixos){
    console.log(numero)
}