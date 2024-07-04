import { Transporte } from "./Transporte";

export class Terrestre extends Transporte{

    private _numeroRodas: number;
    private _velocidade: number;

	constructor(capacidade: number, numeroRodas: number, velocidade: number) {
        super(capacidade);
		this._numeroRodas = numeroRodas;
		this._velocidade = velocidade;
	}

	public get numeroRodas(): number {
		return this._numeroRodas;
	}

	public get velocidade(): number {
		return this._velocidade;
	}

	public set numeroRodas(value: number) {
		this._numeroRodas = value;
	}

	public set velocidade(value: number) {
		this._velocidade = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`Número de Rodas: ${this._numeroRodas}`);
        console.log(`Velocidade: ${this._velocidade}`);
    }
}