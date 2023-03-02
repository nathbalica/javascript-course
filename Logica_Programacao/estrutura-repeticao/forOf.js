// for clássico - geralmente funciona com iteráveis (array ou string)
// for in - retorna o indice ou a chave (string, array, objetos)
// for of - retorna o valor em si (iteráveis, arrays ou strings)



const nomes = ['Luiz', 'Maria', 'Ana', 'Joao'];

// nao funciona com objetos
for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

console.log('######')

// retorna indice
for (let i in nomes){
    console.log(nomes[i])
}

console.log('######')

// retorna so o valor
for (let valor of nomes){
    console.log(valor)
}

console.log('######')

nomes.forEach(function(valor, indice){
    console.log(valor, indice)
})

