function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(date){
    const dia = zeroEsquerda(data.getDate())
    const mes = zeroEsquerda(data.getMonth())
    const ano = zeroEsquerda(data.getFullYear())
    const hora = zeroEsquerda(data.getHours())
    const minuto = zeroEsquerda(data.getMinutes())
    const segundo = zeroEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`

}

const data = new Date()
const formatoBrasil = formataData(data)

console.log(formatoBrasil)