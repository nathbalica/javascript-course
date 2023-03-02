const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// atribuicao via desestruturacao, 
// transforma o que esta dentro do objeto em variavel
// const { nome, sobrenome} = pessoa
// console.log(nome, sobrenome)

const { nome: teste} = pessoa
console.log(teste)

const { endereco: { rua, numero }, endereco} = pessoa
console.log(rua, numero, endereco)

const { nome, ...resto} = pessoa
console.log(resto)