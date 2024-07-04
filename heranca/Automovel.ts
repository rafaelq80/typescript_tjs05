import { Terrestre } from "./Terrestre";

export class Automovel extends Terrestre{

    private _cor: string;
    private _numeroPortas: number;
    private _placa: string;
    private _marchas: number;

	constructor(capacidade: number, numeroRodas: number, velocidade: number, 
                cor: string, numeroPortas: number, placa: string, marchas: number) {
        super(capacidade, numeroRodas, velocidade);
		this._cor = cor;
		this._numeroPortas = numeroPortas;
		this._placa = placa;
		this._marchas = marchas;
	}
	
	public get cor(): string {
		return this._cor;
	}

	public get numeroPortas(): number {
		return this._numeroPortas;
	}

	public get placa(): string {
		return this._placa;
	}

	public get marchas(): number {
		return this._marchas;
	}

	public set cor(value: string) {
		this._cor = value;
	}

	public set numeroPortas(value: number) {
		this._numeroPortas = value;
	}

	public set placa(value: string) {
		this._placa = value;
	}

	public set marchas(value: number) {
		this._marchas = value;
	}
	
    // Polimorfismo de Sobrescrita
    public visualizar(){
        super.visualizar();
        console.log(`Cor: ${this._cor}`);
        console.log(`Nº de portas: ${this._numeroPortas}`);
        console.log(`Placa: ${this._placa}`);
        console.log(`Nº de Marchas: ${this._marchas}`);
    }

}