function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre nada'){
            return `${nome} esta ${assunto}.`;
        },
        peso,
        altura,
        imc(){
            const ind = this.peso / (this.altura ** 2);
            return ind.toFixed(2);
        }
    }; 
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nome)
console.log(p1.sobrenome)