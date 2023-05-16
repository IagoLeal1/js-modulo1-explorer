//criar um aplicativo de frases motivacionais

//declaration - declaração da função
function createPhrases() {
  console.log('Estudar é muito bom')
  console.log('Paciência e persistencia')
  console.log('Revisar é a mãe do aprendizado')
}

//executar a função 
// createPhrases();

//function expression ou anonymous
//parâmetros
const sum = function(number1,number2){
   let total = number1 + number2
  return total
}

// let number1 = 34
// let number2 = 25

// console.log(` o número 1 é ${number1}`)
// console.log(` o número 2 é ${number2}`)
// console.log(` a soma é ${sum(number1 , number2)}`)

// function scope
let subject ='create video'

function createThink(subject) {
  subject = 'study'
  return subject
}

// console.log(createThink(subject))
// console.log(subject)

// function hoisting
// sayMyName()

// function sayMyName() {
//   console.log('Iago')
// }

//arrow function 

// const sayMyName = () => {
//   console.log('Iago')
// }

// sayMyName()

// callback function
// function sayMyName(name) {
//   console.log('antes de executar a função callback')
//   name()

//   console.log('depois de executar a função callback')
// }

// sayMyName(
//   () => {
//     console.log('estou em uma callback')
//   }
// )

/* function() constructor

*expressao new
*criar um novo objeto
*this keyword

*/

let date = new Date("2020-12-01")

console.log(date)

// function Person(name) {
//   this.name = name
//   this.walk = function(){
//     return this.name + " está andando"
//   }
// }

// const iago = new Person("Iago")
// const joao = new Person("joao")
// console.log(iago.walk())
// console.log(joao.walk())