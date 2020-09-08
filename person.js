'use strict';

const person= require('./person.json');

console.log(person.lastname);
console.log(person.firstname);
console.log(person.phone);

console.log(
`my name is ${person.firstname}, ${person.lastname}`);