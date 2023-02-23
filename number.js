//TIPO PRIMITIVO number e função Number

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //função que verifica se é inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //função determina numero de casas decimais
console.log(media.toString()) //converte valores numérios em string
console.log(media.toString(2)) //o parâmetro 2 converte para binário
console.log(typeof media) //typeof diz o tipo da variavel
console.log(typeof Number) 

//Number : função 
//number: tipo primitivo