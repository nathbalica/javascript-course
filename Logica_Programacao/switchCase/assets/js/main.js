
// const resultado = document.querySelector('.container h1')

// function diaSemanaTexto(num){
//     switch (diaSemana){
//         case 0:
//             return 'Domingo';
//         case 1:
//             return 'Segunda-feira';
//         case 2:
//             return 'Terça-feira';
//         case 3:
//             return 'Quarta-feira';
//         case 4:
//             return 'Quinta-feira';
//         case 5: 
//             return 'Sexta-feira';
//         case 6:
//             return 'Sabado';
//         default:
//             return '';
//     }

// }


// const data = new Date('2019-10-07 22:52:00');
// const diaSemana = data.getDay()
// const getDiaSemanaTexto = diaSemanaTexto(diaSemana)
// const dia = data.getDate()
// const ano = data.getFullYear()
// const horas = data.getHours()
// const minutos = data.getMinutes()

// resultado.innerHTML = `${getDiaSemanaTexto}, ${dia} de outubro de ${ano} ${horas}:${minutos} `

const res = document.querySelector('.container h1');


const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

// let local_datadata = new data.DateTimeFormat('en', { dateStyle: "medium", timeStyle: "medium" }).format(new Date())
// let local_datadata = new Intl.DateTimeFormat('pt-BR', opcoes).format(data);
res.innerHTML = data.toLocaleString('pt-BR', opcoes)