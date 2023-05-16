// if...else

/* 
let temperature = 36
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if( highTemperature ){
  console.log('Febre alta')
} else if ( mediumTemperature ){
  console.log('Febre moderada')
} else {
  console.log('saudavel')
} 
*/

// switch 

/* 
function calculate (number1, operator, number2){
  let result = 0;

  switch (operator) {
    case '+':
        result = number1 + number2
        break;
    case '-':
        result = number1 - number2
        break;
    case '*':
        result = number1 * number2
        break;
    case '/':
        result = number1 / number2
        break;
    default:
        console.log('não implementado')
        break;
  }

  return result
}

console.log(calculate(4, '*', 8))
*/

// throw

function sayMyName(name = ''){
  if (name === '') {
    throw 'nome é obrigatorio'
  }
  console.log('depois do erro')
}

//try...catch
try{
  sayMyName()
} catch(e){
  console.log(e)
}

console.log('após o try/catch')