// Função construtora -> retorna objetos
// Funcao Fabrica -> retorna objetos
// Construtora -> Letra maiuscula (Pessoa) new

function Pessoa(nome, sobrenome){
    const ID = 123456;
    const metodoInterno = function(){

    };

    // Atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método')
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
console.log()