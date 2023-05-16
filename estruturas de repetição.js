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

/*
let i = 414424142;
while(i > 10){
  console.log(i)

  i /= 35;
}
*/

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