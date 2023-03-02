
function relogio(){
    function criaHoradosSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'UTC'
        });
    };
    
    const relogio = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    let segundos = 0;
    let timer;
    
    function iniciaRelogio(){
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criaHoradosSegundos(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(e){
        // elemento que esta sendo clicado
        const elemento = e.target;
    
        if(elemento.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
        if(elemento.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
        if(elemento.classList.contains('zerar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    })
}

relogio();


// outra forma de fazer

// iniciar.addEventListener('click', function(event){
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     iniciaRelogio();
// });

// pausar.addEventListener('click', function(event){
//     clearInterval(timer);
//     relogio.classList.add('pausado');
// });

// zerar.addEventListener('click', function(event){
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     segundos = 0;
// })