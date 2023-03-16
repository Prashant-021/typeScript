"use strict";
let stringArr = ['one', 'hey'];
let guitars = ['Start', 'les Paul', 5150];
let mixedData = ['EvH', 1892, true];
console.log(stringArr[0]);
// stringArr[0] = 12 //Type 'number' is not assignable to type 'string'.
guitars[2] = "hello";
console.log(guitars);
mixedData[3] = 12;
console.log(mixedData);
stringArr[1] = true;
stringArr[1] = 100;
guitars[0] = 200;
console.log(guitars);
guitars.unshift("world");
console.log(guitars);
let test = []; // any type
let test1 = ['Hello', 'world'];
//Tuple
let myTuple = ['Hello', 12, true];
let mixed = ['John', 1, false];
myTuple = mixed;
myTuple[3] = 21;
console.log(typeof myTuple);
// object
let myObj = {
    a: 12
};
console.log(typeof myObj);
console.log(myObj);
myObj = mixed;
console.log(myObj);
const exampleObj = {
    prop1: 12,
    prop2: true
};
exampleObj.prop1 = false;
exampleObj.prop1 = 21;
console.log(exampleObj);
let details = {
    name: 'Prashant',
    age: 21,
    address: [192, 'Gajanand Park']
};
let testDetails = {
    name: 'testName',
    age: 13,
    address: [12, 'aerfd']
};
let testDetails1 = {
    name: 'testName',
    age: 13,
    address: [12, 'aerfd'],
    demo: 12
};
details = testDetails1;
console.log(details);
const myFunc = (param) => {
    return `Hello ${param.name}!`;
};
// enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
var Grade1;
(function (Grade1) {
    Grade1[Grade1["U"] = 1] = "U";
    Grade1[Grade1["D"] = 2] = "D";
    Grade1[Grade1["C"] = 3] = "C";
    Grade1[Grade1["B"] = 4] = "B";
    Grade1[Grade1["A"] = 5] = "A";
})(Grade1 || (Grade1 = {}));
