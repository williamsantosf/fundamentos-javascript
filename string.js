//OPERAÇÕES COM STRINGS

const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna a letra refernte ao íncide
console.log(escola.charCodeAt(5)) //retorna o valor do índice na tabela Unicode
console.log(escola.indexOf("3")) //retorna o índice referente ao caracter
console.log(escola.substring(1)) //retorna a cadeia de string a partir o indice indicado
console.log(escola.substring(0,3)) //retorna a cadeita de strings entre os indices indicados (no exemplo ñ retorna o índice 3)

console.log('Escola '.concat(escola).concat('!')) //concatena strings e literais
console.log('Escola' + escola + '!') //tem o mesmo efeito de concat
console.log(escola.replace(3, 'e')) //modifica o caracter no pindice indicado (nesse caso substitui o 3 por e)

console.log('William, Camila, Gilberto'.split(','))
/* transforma uma string em um array, separando os objetos pelo parãme'tro indicado
no caso uma vírgula*/
