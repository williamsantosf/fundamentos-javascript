//FUNÇÕES

/* Uma função é um verbo, ou seja, executa uma ação.
Uma função é um bloco de código nomeado, que podem ser reutilizados
em outras partes de um programa.
*/

//Função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3) //chamada à função
imprimirSoma(2) //NaN: o parâmetro não informado é undefined
imprimirSoma(2, 3, 4, 5, 7, 8) //por receber só dois parâmtros, a função ingora os outros.


//Função com retorno

function soma(a, b = 1){ //valor padrão para um dos parâmetros
    return a + b
}

console.log(soma(2,3)) //funções que têm retorno precisam do console.log
console.log(soma(2)) //eram esperados dois parâmetros, como so foi informado um, o segundo assume o valor padrão
console.log(soma()) //NaN: pois um dos parâmetros, por não ter um valor padrão, é undefined.

////////////////////////////////////////////////////

function subtracao(km1, km2, comb){
    return (km2 - km1)/comb
}

console.log(subtracao(0,200,100))