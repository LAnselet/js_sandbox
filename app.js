// log to console
console.log('Hello World!');
console.log(123);
console.log(true);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2 });

console.error('This is some error');
console.clear();
console.warn('This is a warning');
console.time('Hello');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.timeEnd('Hello');

/*
  multi
  line
  comments
*/

// var, let, const

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// initialize var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// const
const person = {
  name: 'John',
  age: 30,
};

person.name = 'Sara';
person.age = 32;

// console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);

// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
  city: 'Boston',
  state: 'MA',
};
const today = new Date();

console.log(today);
console.log(typeof today);

let val;

// Number to string
val = String(555);
val = String(4 + 4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = true.toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello');
val = Number([1, 2, 3]);

val = parseInt('100.30');
val = parseFloat('100.30');

// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));

// const val1 = String(5);
// const val2 = 6;
// const sum = val1 + val2;
// const sum1 = Number(val1 + val2);

// console.log(sum1);
// console.log(typeof sum1);

const num1 = 100;
const num2 = 50;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.random();

val = Math.floor(Math.random() * 20);

console.log(val);

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello my name is Brad';
const tags = 'web design,web development,programming';

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('foo');

console.clear();
console.log(val);

// 012 Template Literals
const name12 = 'John';
const age12 = 30;
const job = 'Web Developer';
const city = 'Miamo';

// Without template string (es5)
html =
  '<ul>' +
  '<li>Name: ' +
  name12 +
  '</li>' +
  '<li>Name: ' +
  age12 +
  '</li>' +
  '<li>Name: ' +
  job +
  '</li>' +
  '<li>Name: ' +
  city +
  '</li>' +
  '</ul>';

function hello() {
  return 'hello';
}

// With template strings (es6)
html = `
  <ul>
    <li><Name: ${name12}</li>
    <li>Age: ${age12}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age12 > 30 ? 'over 30' : 'under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;

// 013 Arrays & Array Methods
// Create some arrays
const numbers1 = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val1;

// Get array length
val1 = numbers1.length;
// Check if is array
val1 = Array.isArray(numbers);
// Get single value
val1 = numbers1[3];
val1 = numbers1[0];
// Insert into array
numbers1[2] = 100;
// Find index of value
val1 = numbers1.indexOf(36);

console.log(numbers1);
console.log(val1);
