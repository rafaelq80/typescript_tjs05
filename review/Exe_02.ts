import readlinesync = require("readline-sync");

let numero: number = 0;
let totalPares: number = 0;
let totalImpares: number = 0;
let contador = 1;

// for (let contador = 1; contador <= 10; contador++) {
    
//     numero = readlinesync.questionInt(`Digite o ${contador} numero: `);

//     if(numero%2 == 0) {
//         totalPares++;
//     }else{
//         totalImpares++;
//     }

// }

while(contador <= 10) {

    numero = readlinesync.questionInt(`Digite o ${contador} numero: `);

    if(numero%2 == 0) {
        totalPares++;
    }else{
        totalImpares++;
    }

    contador++;
    
}

console.log(`Total de números pares: ${totalPares}`);
console.log(`Total de números impares: ${totalImpares}`);