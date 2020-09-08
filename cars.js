'use strict';

const cars= require('./cars.json')
//print cars
for (let car of cars) {
    if (car.model.toLowerCase() === 'bmw') {
    console.log(car);
    }
   }

   function getWithModel(model) {
    let carsFound = [];
    for (let car of cars) {
    if (car.model.toLowerCase() === model.toLowerCase()) {
    carsFound.push(car);
    }
    }
    return carsFound;
   }
console.log(getWithModel('bmw'));
console.log('########### pejot ##########');
console.log(getWithModel('toyota'));
console.log('########### x ##########');
console.log(getWithModel('x'));


function getWithLicence(licence) {
 for (let car of cars) {
 if (car.licence.toUpperCase() === licence.toUpperCase()) {
 return car;
 }
 }
 return null; }
let foundCar = getWithLicence('ABC-1')
console.log(foundCar);
console.log(getWithLicence('x'));








