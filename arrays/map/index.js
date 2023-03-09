const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// dobre os numeros
// const numDobro = numeros.map(valor => valor * 2)
// console.log(numDobro)

// para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

const nomePessoa = pessoas.map(obj => obj.nome)
const removeNome = pessoas.map(obj => ({idade: obj.idade})) 
const addId = pessoas.map(function(obj, indice){
    const newObj = { ...obj } 
    newObj.id = indice 
    return newObj
})

console.log(pessoas)
