//ARRAYS
/* Arrays em JS são dinâmicos, pode crescer e diminuir*/

//ACESSANDO POSIÇÕES DO ARRAY
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0],valores[3])
console.log(valores[4])

//INCLUINDO ELEMENTOS NO ARRAY
valores[4] = 10
console.log(valores)
console.log(valores.length) //Verifica tamanho do array


valores.push({id: 3}, false, null, 'teste') //push: inclui elementos
console.log(valores)

console.log(valores.pop()) //pop: retira e retorna o ultimo elemento e o retorna
delete valores[0] //detela elemento de acordo com a posição
console.log(valores)
console.log(valores.length)


