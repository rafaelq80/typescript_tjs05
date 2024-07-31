const printNome = (nome: string) => {
    /**
     * Adicionamos a função setTimeout() para atrasar
     * a execução da função em 5 segundos
     **/
    setTimeout( () => {
        console.log(nome)
    }, 5000);
};

const printIdade = (idade: number) => {
    console.log(idade);
};

/**
 * Observe que a função printIdade() será executada
 * somente depois da execução da função printNome(),
 * ou seja, depois que passar os 5 segundo de atraso.
 */
printNome("João da Silva");
printIdade(20);