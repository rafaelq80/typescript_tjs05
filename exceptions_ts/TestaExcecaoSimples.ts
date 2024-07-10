import readline = require("readline-sync");
import { ExcecaoSimples } from "./ExcecaoSimples";

let resultado: number | null;
let loop: boolean = true;

do {

    try{
        
        let numero1: number = readline.questionFloat("Digite o primeiro numero: ");
        let numero2: number = readline.questionFloat("Digite o segundo numero: ");

        resultado = dividir(numero1, numero2);

        console.log(`${numero1} / ${numero2} = ${resultado}`);

        loop = false;

    }catch(error: any){
        console.error(error.name);
        console.error(error.message);
        
        if (error instanceof ExcecaoSimples)
            console.error("\nTente novamente.")
        else
            console.error("\Erro inesperado!");
    }

} while (loop);

function dividir(numero1: number, numero2: number): number | null {

    if (numero2 == 0)
        throw new ExcecaoSimples("Não exsiste divisão por zero!");

    return numero1 / numero2;

}