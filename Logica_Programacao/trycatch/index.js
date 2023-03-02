function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser numeros')
    }
    return x + y;
};

try {
    console.log(soma(1, 2));
} catch(error) {
    console.log(error)
    console.log('Alguma coisa mais amigavel pro usuário')
}

try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')
} catch  (e){
    console.log('tratando o erro');
} finally {
    console.log('Finally: Eu sempre sou executado');
} 