// 1. Declare uma variavel de nome weight

let weight;

//2. que tipo de dado é a variavel acima?

console.log(typeof weight);

/* 3. declara uma variavel e atribua valores para cada um dos dados:
 *name: String
 age: Number (integer)
 stars: Number (float)
 isSubscribed: boolean
 
 */
let person = {
  name: 'Iago',
  age: 22,
  stars: 4.9,
  isSubscribed: true,
};

/* 4. A variavel* student abaixo é de que tipo de dados? 

4.1 Atribua a ela as mesmas propriedades do exercício 3.

4.2 mostre no console a seguinte mensagem :
<name> de idade <age> pesa <weight> kg. 

*/

let student = {
  name: 'Iago',
  age: 22,
  stars: 4.9,
  isSubscribed: true,
  weight: 64,
};

console.log(
  `o ${student.name} de idade ${student.age} pesa ${student.weight} kg.`
);

/*5. declare uma vaiavel do tipo Array, de nome 
students e atribua a ela nenhum valo, ou seja,
 somente o array vazio */

 let students =[]

 /* 6. Reatribua valor para a variavel acima, colocando
 dentro dela o objeto studant da questão 4. (não 
  copiar e colar o objeto), mas usar o objeto criado e
  inserir ele no array */

  students = [
      student 
  ]

  /* 7. coloque no console o valor da posição zero do
  array acima */

  console.log(students[0])

  /* 8. Crie um novo student e coloque na posicão 1 do 
  Array students */

  students = [
    student,
    studentNew = {
      name: 'John',
      age: 25,
      stars: 4.9,
      isSubscribed: false,
      weight: 90,
    }
  ]

  console.log(students[1])

  /* 9. Sem rodar o codigo responda qual é a resposta do
  codigo abaixo e por que? apos a sua resposta, rode o codigo
  e veja se acertou
  
  console.log(a)
  var a = 1 
  
  R: Ele vai falar q a variavel existe ( undefined ) mas 
  não é definida = Hosting 
  */

  console.log(a)
  var a = 1 
 
