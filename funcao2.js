// Armazenando funções em uma variável

const imprimirSoma = function(a, b) {
    console.log(a +b)
}

imprimirSoma(2,3)


//Armazenando uma função arrow em uma variável
//substitui a palavra reservada function por "=>"
const soma = (a, b) => {
    return a+ b
}
console.log(soma(2,3))


//retorno implícito
//quando temos apenas uma sentença de código
const subtracao = (a, b) => a - b
console.log(subtracao(5,3))

//função de um único parâmetro
//ela retorna o próprio parâmetri informado
const imprimir2 = a => console.log(a)
imprimir2('William')

/////////////////////////////////////////////////////////////

/*
Exemplo: criando a função que calcula o consumo de oleo diesel
devido para um implemento existente em carretas que transportam
produto quente, como CAP.
*/

const consumoMacarico = function(horaIni,horaFin){
    return (horaFin - horaIni) * 16
}
console.log(consumoMacarico(1,2))


const consumoMacarico2 = (horaIni, horaFin) => (horaFin-horaIni)*16
console.log(consumoMacarico2(0,2)) 

