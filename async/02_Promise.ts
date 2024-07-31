/**
 * Cria a função assíncrona showNome(),
 * através de uma Promise
 */
const showNome = (nome: string) => {
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

/**
 * Cria a função síncrona showIdade()
 */
const showIdade = (idade: number) => {
    console.log(idade);
};

/**
 * Executa a função assíncrona showNome()
 * then() o que fazer se a função for resolvida
 * catch() o que fazer se a função for rejeitada
 */
showNome("João da Silva")
    .then((nome) => { 
        console.log(nome);
        console.log("Função Resolvida!");
    })
    .catch(() => {
        console.log("Função Rejeitada!");
    });

/**
 * Observe que função síncrona showIdade()
 * será executada antes da função assíncrona
 * showNome(). 
 * A função showNome() possui um atraso de 5 
 * segundos e como se trata de uma função assíncrona,
 * ela será executada em segundo plano e enquanto 
 * isso a função síncrona será executada normalmente.
 * Quando a função assíncrona for concluída, o 
 * resultado será exibido na tela
 */
showNome("João da Silva");
showIdade(21);