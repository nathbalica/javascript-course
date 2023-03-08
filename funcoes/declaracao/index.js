// declaração de função (function hoisting)

function falaOi(){
    console.log('oie')
}

// first-class objects (objetos de primeira classe)
// function expression
const souUmDado = function(){
    console.log('sou um dado');
};
souUmDado()

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow()

const obj = {
    falar(){
        console.log('estou falando...')
    }
};

obj.falar();

