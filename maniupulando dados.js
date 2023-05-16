/* 

Prototype

*prototype-based language
*prototype chain 
*__proto__ 

*/

/* 
  Type conversion (typecasting vs Type conversion) 
  *Alteração de um tipo de dado para outro tipo 
  
  console.log(Number('9') + 5)
*/

//manipulando strings e numeros

// transformar string em numero e numero em string

// let string = "123"
// console.log(Number(string))
// let number = 321
// console.log(String(number))

// contar quantos caracteres tem uma palavra e quantos digitos tem um numero

// let word = "paralelepipedo"
// console.log(word.length)

// let number = 1234
// console.log(String(number).length)

//transformar um numero quebrado com 2 casa decimais e trocar por virgurla

// let number = 525.5352535
// console.log(number.toFixed(2).replace(".",","))

//transformar pra letra maiscula ou minuscula
// let word = "Programar é muito bom"
// console.log(word.toLocaleUpperCase().toLocaleLowerCase())

//separar o texto
// let phrase = "Eu quero viver o amor"
// let myArray = phrase.split(" ")
// console.log(myArray)
// let phraseWithUnderscore = myArray.join("_")
// console.log(phraseWithUnderscore)

// verificar se o texto contem a palavra amor
// let phrase = "Eu quero viver o amor"
// console.log(phrase.includes("amor"))

//criar Array com construtor
// let myArray = new Array('a', 'b', 'c')
// console.log(myArray)

// contar elementos de um Array
// console.log(["a","b", "c"].length)

// strings para array
// let word = 'manipulação';
// console.log(Array.from(word))

//manipulação Arrays

let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("nodejs")
//adicionar no começo
techs.unshift("sql")
//remover no fim
// techs.pop()
//remover no começo
// techs.shift()
//pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))
//remover 1 ou mais items em qualquer posição do array
// techs.splice(1,3)
//encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

 console.log(techs)
