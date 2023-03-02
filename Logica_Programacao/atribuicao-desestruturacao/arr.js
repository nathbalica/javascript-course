const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000]

const [firstNum, secondNum, ...rest] = numeros
console.log(firstNum, secondNum, rest)

const [one, , , four] = numeros
console.log(one, four)

//                  0          1          2
//               0  1  2    0  1  2    0  1  2
const lista = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(lista[1][2])

const [lista1, lista2, lista3] = lista;
console.log(lista1[2])
