let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

/* 
Usamos a negação para verificar se um valor armazenado em uma
variável é verdadeiro ou falso.

!!: A negação duas vezes é um artifício em JS para verificar
se algo é verdadeiro

*/
isAtivo = 1
console.log(!!isAtivo)
/*
O valor consegue ser resolvido pela linguagem como um valor
verdadeiro, pois a negação de um valor verdadeiro é falso,
e conseguinte a negação de um valor falso é verdadeiro.
Logo, para testar se algo é verdadeiro, negamos duas vezes,
para que linguagem teste se aquele valor pode ser resolvido
para falso e em seguida retornado para verdadeiro
*/

console.log('Os verdadeiros')
/*situações em que o contexto é requerido verdadeiro ou falso, 
eles vão se comportar como verdadeiro.
*/

console.log(!!3)
console.log(!!-1)
console.log(' ') //espaço é diferente de string vazia
console.log(!![]) //array vazio é verdadeiro
console.log(!!{}) //objeto literal é verdadeiro
console.log(!!Infinity)
console.log(!!(isAtivo = true)) //valor armazenado é verdadeiro

console.log('Os falsos')
console.log(!!0) //a linguagem não consegue resolver zero para falso e depois verdadeiro, logo é falso
console.log(!!'') //string vazia é falso
console.log(!!null) //null é falso
console.log(!!NaN) //Not A Number é falso
console.log(!!undefined) //Undefined é falso
console.log(!!(isAtivo = false)) //valor armazenado na variavel é falso

console.log('Finalizando')
console.log(!!('' || null || 0 || ' ' )) /*
O operador ou vai verificar se dentre os valores, quais são verdadeiros*/

//Exemplo OU ||
let nome = ''
console.log(nome || 'Desconhecido')
//como uma string vazia não pode ser resolvida como verdadeiro, retorna desconhecido.



















