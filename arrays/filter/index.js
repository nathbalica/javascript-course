const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// com filter
// sempre retorna um array com a mesma quantidade de elementos do array ou menos

// os argumentos da funçao podem ser: valor, indice e array

// function callbackFilter(valor){
//     return valor > 10     
// }
// const numFiltrados = numeros.filter(callbackFilter);


// com funcao anonima
// const numFiltrados = numeros.filter(function(valor) {
//     return valor > 10
// });

// com arrow function
// obs: como so tem um argumento na função, pode-se remover os parenteses
// remove-se tbm o return pq so tem uma linha
const numFiltrados = numeros.filter(valor => valor > 10);

console.log(numFiltrados)

// pegar os numeros maiores que dez

// let maioresDez = [] 

// for( let num of numeros){
//     if (num > 10){
//         maioresDez.push(num)
//     }
// }

// console.log(maioresDez)

