//OBEJTOS
//Objetos são coleções de pares chave: valor
const prod1 = {} //criação do objeto
prod1.nome = 'Celular Ultra Mega' //atribulo nome (criado dinâmicamente)
prod1.preco = 4998.90 //atributo preço (criado dinâmicamente)
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

//Objeto criado já com os atributos
const prod2 = { 
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)


/////////////////////////////////////////

const frota1 = {}
frota1.placa = 'RPD-1F94'
frota1.id = '243'
frota1.modelo = 'Volvo FH 460'
frota1.ano = 2022
console.log(frota1)

const frota2 = {
    placa : 'RPD-8A61',
    id : '244',
    modelo : 'Volvo FH 460',
    ano : 2022
}
console.log(frota2)