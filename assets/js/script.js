// console.log('Hello World!');
/* confirm('Hello?');
console.log('After confirm'); */


// var let const

// var name = 'Tom';
// var age = 30;
// var isStudent = false;

// console.log('Hello', name, age, isStudent);

// var undefinedVariable;
// console.log(undefinedVariable);

// var undefinedVariable = undefined;
// console.log(undefinedVariable);

// var nullVariable = null;
// console.log(nullVariable);

// var sum = age + name + isStudent;
// console.log(sum);

// var innerWidth = 300;

// console.log(window)

// {
//   var varInside = 30;
//   let letInside = 40;
  
//   console.log('Inside block {}', varInside, letInside);
// }
// Reference Error
// console.log('Outside block {}', varInside, letInside); 

// const constantValue = 50;
// console.log(constantValue);

// Type Error: Assignment to constant variable.
// constantValue = 60;

// let stringOrNumberVariable = 'Tom';
// let typeOfVariable = typeof stringOrNumberVariable;
// console.log('stringOrNumberVariable', stringOrNumberVariable, typeOfVariable);
// stringOrNumberVariable = 100;
// typeOfVariable = typeof stringOrNumberVariable;
// console.log('stringOrNumberVariable', stringOrNumberVariable, typeOfVariable);

// Hoisting
// var firstNumber = 1;
// var secondNumber = 2;
// console.log(firstNumber, secondNumber); // 1 2

// var firstNumber = 1;
// console.log(firstNumber, secondNumber); // 1 undefined
// var secondNumber = 2;


// const a = 10;
// const b = 3;

// const summa = a + b;
// const sub = a - b;
// const mult = a * b;
// const div = a / b;
// const tail = a % b;
// const pow = a ** b;

// NaN - Not A Number
// console.log(undefined + 1);

// console.log(summa, sub, mult, div, tail, pow);

// console.log('a > b', a > b);
// console.log('a < b', a < b);
// console.log('a == b', a == b);
// console.log('3 == 3', 3 == 3);

// console.log('a == 3', 'a' == 3);
// console.log("'3' == 3", '3' == 3);
// console.log("'false' == false", 'false' == false);
// console.log("'3' === 3", '3' === 3);
// console.log('0 == false', 0 == false);
// console.log('undefined == null', undefined == null);
// console.log('undefined === null', undefined === null);

// console.log('1 & 2', 1 & 2);
//  01
//  10
//= 00
// console.log('1 | 2', 1 | 2);
//  01
//  10
//= 11


// console.log('true && false', true && false);
// console.log('true && true', true && true);
// console.log('true || false', true || false);
// console.log('false || false', false || false);

// console.log('!true', !true);
// console.log('!false', !false);

// console.log('!!1', !!1);
// console.log('!!0', !!0);
// console.log('!!-1', !!-1);
// console.log('!!false', !!false);
// console.log('!!true', !!true);
// console.log('!!undefined', !!undefined);
// console.log('!!null', !!null);


// let prevVariable = null; // ?? checks undefined OR null
// const someVariable = prevVariable ?? 'Super';
// console.log(someVariable);


// if (name && age) {
//   console.log('If true');
// } else {
//   console.log('If else');
// }


// let unexpectedValue;

// if (name && age) {
//   unexpectedValue = 'Person';
// } else {
//   unexpectedValue = 'Empty';
// }

// const unexpectedValue = name && age ? 'Person' : 'Empty';
// console.log(unexpectedValue);


// const userInput = 'Spacesssss' // wasd


// if (userInput === 'w') {
//   console.log('Jump');
// } else if (userInput === 'a') {
//   console.log('Left');
// } else if (userInput === 'd') {
//   console.log('Right');
// } else if (userInput === 's') {
//   console.log('Down');
// } else {
//   console.log('Unexpected input');
// }

// switch (userInput) {
//   case 'w':
//   case 'Space':
//     console.log('Jump');
//     break;
//   case 'a':
//     console.log('Left');
//     break;
//   case 'd':
//     console.log('Right');
//     break;
//   case 's':
//     console.log('Down');
//     break;
//   default:
//     console.log('Unexpected input');
//     break;
// }

// const numberArray = [1, 'Tom', false, undefined, null];
// console.log(numberArray);
// console.log(numberArray[1]);

// const numberArrayEmpty = [];
// console.log(numberArrayEmpty[1]);

// for (let i = 0; i < numberArray.length; i++) {
//   const element = numberArray[i];
//   console.log('Element with index', i, '=', element)
// }

// let i = 0;
// while (i < numberArray.length) {
//   console.log('While. Element with index', i, '=', numberArray[i]);
//   i++;
// }

// do {
//   console.log('Inside do block')
// } while (age > 30);

// const matrix = [
//   ['name', 'age', 'isStudent'],
//   ['Tom', 30, false],
//   ['Ivan', 18, true]
// ]

// for (let i = 0; i < matrix.length; i++) {
//   const row = matrix[i];
//   let rowStringValues = ''
//   for (let j = 0; j < row.length; j++) {
//     const cell = matrix[i][j];
//     rowStringValues = rowStringValues + cell + ' '
//   }
//   console.log(rowStringValues);
// }

// function sumF(a, b) {
//   console.log('Inside sumF', a, b);
//   const result = a + b;
// }

// function sumF(a, b) {
//   const result = a + b;
//   return result;
// }

// const sumF = (a, b) => {
//   return a + b;
// }

// const sumF = (a, b) => {
//   return a + b;
// }

// let sumF = (a, b) => {
//   return a + b;
// }

// console.log(sumF, typeof sumF);
// const sumResult = sumF(2, 2);
// console.log(sumResult);


// sumF = (a, b) => {
//   return a - b;
// }

// console.log(sumF);
// console.log(sumF(5, 2));

// sumF = 10;

// console.log(sumF);

// // Hoisting
// function sumF(a, b) {
//   return a + b;
// }

// const greet = (name = 'Unknown', age) => {
//   // if (name === undefined)
//   // if (!name) {
//   //   console.log('Hello, Unknown!');
//   //   return;
//   // }

//   console.log('Hello,', name, '!', age);
// }

// greet(undefined, 20);

//arguments
// function argsFunction () {
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     const argument = arguments[i];
//     // result = result + argument;
//     result += argument;
//   }
//   console.log(result)
// }

// const argsFunction = (...args) => {
//   let result = 0;
//   // for (let i = 0; i < args.length; i++) {
//   //   const element = args[i];
//   //   result += element;
//   // }

//   for (const element of args) {
//     result += element;
//   }

//   console.log(result);
// }

// argsFunction(1, 2, 3, 4, 10);

// const calculate = (a, b, func) => {
//   console.log('The math result of', a, b, '=', func(a, b));
// }

// const sumF = (a, b) => {
//   return a + b;
// }

// const subF = (a, b) => {
//   return a - b;
// }

// const multF = (a, b) => {
//   return a * b;
// }

// calculate(3, 4, sumF);
// calculate(3, 4, subF);
// calculate(3, 4, multF);

// const greetFactory = (type) => {
//   if (type === 'person') {
//     return function(name) {
//       console.log('Hello World from function', name);
//     }
//   }

//   if (type === 'orc') {
//     return function(name) {
//       console.log('Arghhh from function', name)
//     }
//   }

//   return function(){};
// }

// // console.log(greetFactory('person'));
// // console.log(greetFactory('orc'));
// // console.log(greetFactory('dog'));
// const greetPerson = greetFactory('person');
// greetPerson('Tom');
// greetFactory('orc')('John');
// greetFactory('dog')();

// window.currentUser = {
//   name: 'Tom'
// };

// window.gVar = 50;

// console.log(window.gVar)



// {
//   const message = 'Hello';
//   console.log('Inside', message);
// }

// {
//   const message = 'Goodbye';
//   console.log('Inside', message);
// }

// alert('Hello!')
// for (let index = 0; index < [1,2,3,4,5].length; index++) {
//   console.log('index=', index);
// }

// console.log('index=', index);

// function sayHiBye(firstName, lastName) {

//   function getFullName() {
//     return firstName + ' ' + lastName;
//   }

//   console.log('Hello,', getFullName());
//   console.log('Bye,', getFullName());
// }

// sayHiBye('Tom', 'Toms');
// sayHiBye('John', 'Johns');


// closure
// const makeCounter = () => {
//   let count = 0;

//   return () => {
//     // count = count + 1;
//     // return count 
//     return count++;
//   }
// }

// const counter = makeCounter();
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())

// const counter2 = makeCounter();
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

// console.log(counter());

// // Function Expression
// const hi = function(){}
// const hi = () => {}

// const phrase = 'Hello';

// function say(name) {
//   console.log(phrase, ' ', name);
// }

// say('Tom');

// function foo(name) {
//   console.log('Inside 1 name', name);
//   name = 'John';
//   console.log('Inside 2 name', name);
// }

// let otherName = 'Tom';
// console.log('Outside 1 name', otherName);
// foo(otherName);
// console.log('Outside 2 name', otherName);

// Объекты

// const user = {
//   name: 'Tom',
//   age: 20,

//   sayHi: function() {
//     console.log('Hello, World!')
//   },

//   sayHi1: () => {
//     console.log("Hello, World_1!");
//   },

//   greet: function() {
//     console.log('My name is', this.name);
//   }
// }

// console.log(user);
// console.log(typeof user);
// user.sayHi();
// console.log('Name is', user.name, 'Age is', user.age);
// user.name = 'John';
// user.age = 30;
// console.log('Name is', user.name, 'Age is', user.age);
// user.sayHi1();

// user.greet();

// function User(name) {
//   // this = {}; (неявно)
//   this.name = name;
//   this.isAdmin = false;
//   // return this (неявно)
// }

// // Не работает, ошибка User is not a constructor
// // const User = () => {
// //   this.name = name;
// //   this.isAdmin = false;
// // }

// const userTom = new User('Tom');
// console.log(userTom);
// const userJohn = new User('John');
// console.log(userJohn);

// function BigUser() {
//   this.name = 'Tom';
//   // return {
//   //   name: 'John'
//   // }
//   // return 1;
// };

// const bigUser = new BigUser();
// console.log(bigUser);

// function User(name) {
//   this.name = name;

//   this.sayHi = function() {
//     console.log('My name is ', this.name)
//   }
// }

// const user = new User('Tom');
// console.log(user);
// user.sayHi();

// const user = {
//   name: 'Tom',
//   age: 20
// };

// console.log(user);
// console.log(user.hasOwnProperty('foo'))
// console.log(user.[[Prototype]]); (Ошибка)
// console.log(user.__proto__);

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   // this.print = function(){
//   //   console.log('Name', this.name, 'Age', this.age);
//   // }
// }

// const foo = {
//   print: function(){
//     console.log('Name', this.name, 'Age', this.age);
//   },
//   sayHello: function (){
//     console.log('Hello, my name is', this.name);
//   }
// }

// User.prototype = foo;

// User.prototype.print = function(){
//   console.log('Name', this.name, 'Age', this.age);
// }

// const user = new User('Tom', 21);

// User.prototype.sayHello = function (){
//   console.log('Hello, my name is', this.name);
// }

// user.print();
// user.sayHello();

// console.log(user);
// console.log(User.prototype);
// console.log(user.__proto__);

// console.log(User.prototype.constructor)
// console.log(user.constructor);

// class User {
//   constructor(name){
//     this.name = name;
//   }

//   print() {
//     console.log('Name', this.name)
//   }

//   sayHello() {

//   }
// }

// const user = new User('Tom');
// console.log(user);
// user.print();

// console.log(typeof User)

// console.log(Object.getOwnPropertyNames(User.prototype))

// // User(); // Class constructor User cannot be invoked without 'new'
// console.log(User);

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   get name() {
//     return this._name + '!';
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log('Имя слишком короткое');
//       return;
//     }
//     this._name = value;
//   }

// }


// const user = new User('John');
// console.log(user);
// console.log(user.name)

// class User {
//   name = 'Unnamed'

//   constructor(name) {
//     if (!!name) {
//       this.name = name;
//     }
//   }
// }

// const user = new User('Tom');
// const user1 = new User();

// console.log(user, user1);

// const user = {
//   firstName: 'Tom',
//   sayHi() {
//     console.log('Name', this.firstName);
//   }
// }

// setTimeout(
//   () => {
//     user.sayHi();
//   },
//   1000
// );

// user.sayHi = function(){
//   console.log('Another name', this.firstName);
// }


// const user = {
//   firstName: 'Tom',
// }

// function sayHi(phrase) {
//   console.log('Name', this.firstName, phrase)
// }

// const sayHiWithUser = sayHi.bind(user);

// sayHi();
// sayHiWithUser('Heeee');

// const user = {
//   firstName: 'Tom',
//   sayHi(){
//     console.log('Name', this.firstName)
//   }
// }

// const sayHi = user.sayHi.bind(user);

// sayHi();
// setTimeout(sayHi, 1000);


// const user = {
//   firstName: 'Tom',
//   sayHi: function() {
//     //// this === user
//     const arrowFunction = () => {
//       console.log(this);
//       console.log('Name', this.firstName)
//     }
//     arrowFunction();
//   }
// }

// user.sayHi();

// setInterval(() => {
//   console.log('Hello')
// }, 1000)

localStorage.setItem('name', 'Tom');
const nameFromLocalStorage = localStorage.getItem('name');
console.log(nameFromLocalStorage)

class User {
   name
   age
   isStudent

   constructor(name, age, isStudent){ 
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
   }

   sayHi(){
    console.log('Hello from', this.name);
   }
}

// const user = {
//   name: 'Tom',
//   age: 21,
//   isStudent: true
// };

const user = new User('Tom', 21, false);
console.log(user)
user.sayHi();

localStorage.setItem('user', JSON.stringify(user))
const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
userFromLocalStorage.__proto__ = User.prototype;
console.log(userFromLocalStorage);
userFromLocalStorage.sayHi();


