 
let umaString = "Um \"texto\"";
let outraString = "Um texto";
let maisString = "O rato roeu a roupa do rei de roma"


console.log(umaString.charAt(6))
console.log(umaString.concat(' em um lindo dia'))
console.log(outraString.indexOf('texto'))
console.log(outraString.lastIndexOf('o'))
console.log(outraString.match(/[a-z]/g))
console.log(outraString.search(/[x]/))
console.log(outraString.replace("Um", "outro"))
// fatia string
console.log(maisString.slice(2, 6))
console.log(maisString.slice(-6))
console.log(maisString.split('a'))
console.log(maisString.toUpperCase)
console.log(maisString.toLowerCase)
