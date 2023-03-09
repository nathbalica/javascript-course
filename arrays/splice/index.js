// nomes.splice(indice, delete, elemento1, elemento2)
//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// simular o pop
// do indice 4 remover 1 elemento
// retorna o que foi removido em forma de array   
// nomes.splice(-1, 1) 


// usando negativos
// const removidos = nomes.splice(-1  , 1)
// console.log(nomes, removidos)

// adicionando elementos
// adiciona o luiz no indice 3 e passa para frente os outros
// const removidos = nomes.splice(3, 0, 'Luiz')
// console.log(nomes, removidos)

// shift
// const removidos = nomes.splice(0, 1);
// console.log(nomes, removidos)

// unshift
// const removidos = nomes.splice(0, 0, 'Luiz');
// console.log(nomes, removidos)

// push
// nomes.splice(nomes.length, 0, 'Luiz');
// console.log(nomes)