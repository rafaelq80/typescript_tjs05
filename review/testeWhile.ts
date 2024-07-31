import { read } from "fs";
import readlinesync = require("readline-sync");

let opcao: boolean = false;

while (opcao) {

    console.log("Estou dentro do Loop!");

    opcao = readlinesync.keyInYNStrict('Continuar');

}

do {

    console.log("Estou dentro do Loop!");

    opcao = readlinesync.keyInYNStrict('Continuar');

}while (opcao)