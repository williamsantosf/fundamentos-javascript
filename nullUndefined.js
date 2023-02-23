//NULL X UNDEFINED
/* Quando uma variável é setada com o valor null, ela não aponta 
para nenhum endereço d e memória. Quando somente declarada e 
não inciializada, seu valor será undefined (não recomendado)*/

let valor //não incializada, seu valor é undefined
console.log(valor) //undefined

const produto = {}
console.log(produto.preco) //undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)
    
produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco) // convertendo para boolean
console.log(produto)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco) //convertendo para boolean
console.log(produto)

//ATRIBUIÇÃO POR VALOR: variáveis tem valores independentes
//ATRIBUIÇÃO POR REFERÊNCIA: duas variáveis aponta para a mesma posição de memória

//Não é possível acessar atributos de uma variavel undefined!!!