console.log('Hello World!');
/* confirm('Hello?');
console.log('After confirm'); */


// var let const

var name = 'Tom';
var age = 30;
var isStudent = false;

console.log('Hello', name, age, isStudent);

var undefinedVariable;
console.log(undefinedVariable);

var undefinedVariable = undefined;
console.log(undefinedVariable);

var nullVariable = null;
console.log(nullVariable);

var sum = age + name + isStudent;
console.log(sum);

// var innerWidth = 300;

console.log(window)

{
  var varInside = 30;
  let letInside = 40;
  
  console.log('Inside block {}', varInside, letInside);
}
// Reference Error
// console.log('Outside block {}', varInside, letInside); 

const constantValue = 50;
console.log(constantValue);

// Type Error: Assignment to constant variable.
// constantValue = 60;

let stringOrNumberVariable = 'Tom';
let typeOfVariable = typeof stringOrNumberVariable;
console.log('stringOrNumberVariable', stringOrNumberVariable, typeOfVariable);
stringOrNumberVariable = 100;
typeOfVariable = typeof stringOrNumberVariable;
console.log('stringOrNumberVariable', stringOrNumberVariable, typeOfVariable);

// Hoisting
// var firstNumber = 1;
// var secondNumber = 2;
// console.log(firstNumber, secondNumber); // 1 2

var firstNumber = 1;
console.log(firstNumber, secondNumber); // 1 undefined
var secondNumber = 2;


const a = 10;
const b = 3;

const summa = a + b;
const sub = a - b;
const mult = a * b;
const div = a / b;
const tail = a % b;
const pow = a ** b;

// NaN - Not A Number
console.log(undefined + 1);

console.log(summa, sub, mult, div, tail, pow);

console.log('a > b', a > b);
console.log('a < b', a < b);
console.log('a == b', a == b);
console.log('3 == 3', 3 == 3);

console.log('a == 3', 'a' == 3);
console.log("'3' == 3", '3' == 3);
console.log("'false' == false", 'false' == false);
console.log("'3' === 3", '3' === 3);
console.log('0 == false', 0 == false);
console.log('undefined == null', undefined == null);
console.log('undefined === null', undefined === null);

console.log('1 & 2', 1 & 2);
//  01
//  10
//= 00
console.log('1 | 2', 1 | 2);
//  01
//  10
//= 11


console.log('true && false', true && false);
console.log('true && true', true && true);
console.log('true || false', true || false);
console.log('false || false', false || false);

console.log('!true', !true);
console.log('!false', !false);

console.log('!!1', !!1);
console.log('!!0', !!0);
console.log('!!-1', !!-1);
console.log('!!false', !!false);
console.log('!!true', !!true);
console.log('!!undefined', !!undefined);
console.log('!!null', !!null);


let prevVariable = null; // ?? checks undefined OR null
const someVariable = prevVariable ?? 'Super';
console.log(someVariable);


if (name && age) {
  console.log('If true');
} else {
  console.log('If else');
}


// let unexpectedValue;

// if (name && age) {
//   unexpectedValue = 'Person';
// } else {
//   unexpectedValue = 'Empty';
// }

const unexpectedValue = name && age ? 'Person' : 'Empty';
console.log(unexpectedValue);


const userInput = 'Spacesssss' // wasd


if (userInput === 'w') {
  console.log('Jump');
} else if (userInput === 'a') {
  console.log('Left');
} else if (userInput === 'd') {
  console.log('Right');
} else if (userInput === 's') {
  console.log('Down');
} else {
  console.log('Unexpected input');
}

switch (userInput) {
  case 'w':
  case 'Space':
    console.log('Jump');
    break;
  case 'a':
    console.log('Left');
    break;
  case 'd':
    console.log('Right');
    break;
  case 's':
    console.log('Down');
    break;
  default:
    console.log('Unexpected input');
    break;
}

const numberArray = [1, 'Tom', false, undefined, null];
console.log(numberArray);
console.log(numberArray[1]);

const numberArrayEmpty = [];
console.log(numberArrayEmpty[1]);

for (let i = 0; i < numberArray.length; i++) {
  const element = numberArray[i];
  console.log('Element with index', i, '=', element)
}

let i = 0;
while (i < numberArray.length) {
  console.log('While. Element with index', i, '=', numberArray[i]);
  i++;
}

do {
  console.log('Inside do block')
} while (age > 30);

const matrix = [
  ['name', 'age', 'isStudent'],
  ['Tom', 30, false],
  ['Ivan', 18, true]
]

for (let i = 0; i < matrix.length; i++) {
  const row = matrix[i];
  let rowStringValues = ''
  for (let j = 0; j < row.length; j++) {
    const cell = matrix[i][j];
    rowStringValues = rowStringValues + cell + ' '
  }
  console.log(rowStringValues);
}

