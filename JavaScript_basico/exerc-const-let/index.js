/*
Luiz Otavio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otravio nasceu em 1980
*/

const nome = "Luiz Otavio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const altura = 1.8;
let imc;
let anoNasc;


imc = peso / (altura * altura)
anoNasc = 2023 - idade

console.log(
    nome, sobrenome, "tem", idade, "anos,", "pesa", peso, "kg tem", altura, "de altura e seu imc é de", imc,
    nome, "nasceu em", anoNasc
)

