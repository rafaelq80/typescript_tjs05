import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Corredor, Nadador, Ciclista {
   
	constructor(nome: string) {
        super(nome);
	}
    
    trotar(): void {
        console.log("Corrida leve...")
    }

    correr(): void {
        console.log("Atleta Correndo...")
    }

    aquecer(): void {
        console.log("Atleta Aquecendo...");
    }

    nadar(): void {
        console.log("Atleta Nadando...")
    }

    pedalar(): void {
        console.log("Atleta Pedalando...")
    }

    public cansar(): void {
        console.log("Cansou...")
    }

}