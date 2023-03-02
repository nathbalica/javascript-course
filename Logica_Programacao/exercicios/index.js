function maiorNumero(num1, num2){
    return num1 > num2 ? num1 : num2
};

// outra forma de fazer
const max2 = (x,y) => x > y ? x : y;

console.log(maiorNumero(3,5))

function ePaisagem(largura, altura){
    return largura > altura;
}

const ePaisage = (largura, altura) => largura > altura;