"use strict";
console.log("Basic Types");
let myName1 = "Prashant";
let age;
let stringType = "This is string";
let boolTyoe = true;
let anyType;
let unionType;
// myName1 = 21 //this is throw an error
myName1 = 'Prashant Patel'; //It will accept any string value
age = 21;
anyType = "Hello";
anyType = 21;
anyType = true;
unionType = "hello";
unionType = 12;
// unionType = true // Type 'boolean' is not assignable to type 'string | number'.
const sum = (a, b) => {
    return a + b;
};
let re = /\w+/g;
