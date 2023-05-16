 var name

 name = 'Iago'

 let isHuman, age

 isHuman = true
 age = 22

 console.log(`o ${name} tem ${age} anos.`)

//Object

const person = {
  name: 'John',
  age: 32,
  weight: 64,
  isAdmin: true,
};

console.log(`o ${person.name} tem ${person.age} anos.`);

// Array

const animals = ['Lion', 'Monkey', 'Cat', {name: 'Dog', age: 4,}];

console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[3]);
console.log(animals[3].age);