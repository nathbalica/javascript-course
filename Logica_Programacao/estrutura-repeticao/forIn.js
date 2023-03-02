const frutas = ['maca', 'laranja', 'limao'];

// esse for lê os indices quando for objeto ele vai ler as chaves
// for (let indice in frutas){
//     console.log(frutas[indice])
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};

// console.log(pessoa.nome);
// console.log(pessoa['nome'])

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}
