/**
 * Este exemplo é o mesmo do arquivo 02_Promise.ts
 * A unica diferença é que utilizaremos a sintaxe 
 * async/await para executar a Promise
 */
const retornaNome = (nome: string) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(nome)
            }, 5000);
        } catch (error) {
            reject(error);
        }
    });
};

const printAge = (idade: number) => {
    console.log(idade);
};

/**
 * A sintaxe async/await permite escrever funções 
 * assíncronas como se fossem funcções síncronas
 * async define que a função é assíncrona, ou seja,
 * executará uma Promise (retornaNome()).
 * await coloca a Promise em segundo plano
 * e aguarda até que ela seja resolvida ou rejeitada
 */
async function printName(nome: string){
    const resposta = await retornaNome(nome);
    console.log(resposta);
}

/**
 * Observe que o resultado será o mesmo do 
 * arquivo 02_Promise.ts.
 * A vantagem é a simplificação da sintaxe.
 */
printName("João da Silva");
printAge(20);
