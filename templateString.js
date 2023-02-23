/* TEMPLATE STRING: Contém recursos mais avançados que a String
    não suporta */

//Exemplo com cstring
    const nome = 'William'
const concatenacao = 'Olá ' + nome + '!'
console.log(concatenacao)

//Exemplo com TemplateString
const template = ` 
    Olá
    ${nome} !`
console.log(template)
/* usa-se o símbolo da crase.
usamos o $ para re'ferenciar uma variável ou expressão */

//expressões

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)


