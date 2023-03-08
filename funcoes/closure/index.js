// closure é a habilidade que a função tem em acessar 
// o seu escopo léxico

function retornaFunção(nome){
    return function(){
        return nome;
    };
}

const funcao = retornaFunção('Luiz');
const funcao2 = retornaFunção('João');

console.dir(funcao());
console.dir(funcao2())