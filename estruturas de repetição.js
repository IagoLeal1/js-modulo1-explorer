//estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento

/* 
for(let i = 10; i > 0; i --){
  if(i === 5){
    continue;
  }

  console.log(i)
}
*/

//while usado quando não se sabe o momento da parada


let i = 414424142;
while(i > 10){
  console.log(i)

  i /= 35;
}
let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1;

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente: ")
  xAttempts++
}

alert(`Parabéns você adivinhou o número em ${xAttempts} tentativas`)


//for...of

/*
let name = 'iago'
let names = ['joao', 'paulo', 'pedro']

for (let name of names){
  console.log(name)
}
*/

// for...in

let person = {
  name: 'john',
  age: 30,
  weight: 88.6
}

for(let property in person){
  console.log(property)
  console.log(person[property])
}
