// retorne as pessoas que tem o nome com 5 letras ou mais
//  retorne as pessoas com mais de 50 anos
//  retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const maiorCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter( obj => {
    return obj.nome.toLowerCase().endsWith('a')
})

console.log(nomeTerminaComA)