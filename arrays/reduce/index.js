// some todos os numeros
// retorne um array com os pares (Filter)
// retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const somaTotal = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador
}, 0)
// console.log(total)

// como fazer com reduce  
const arrayPares = numeros.reduce(function(acumulador, valor, indice, array){
    if( valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, []);
// console.log(arrayPares)


const dobroElementos = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador.push(valor * 2)
    return acumulador
}, []);
// console.log(dobroElementos)

// retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]; 

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha)

