"use strict";
// TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.
// following are the utility types 
const point = {}; // x and y are optional
point.x = 12;
const person = {
    name: "Prashant",
    age: 21,
    dob: "21/08/01" // ir forces to declare although it is optional
};
const bob = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};
// 4. Record        - shortcut of defining a specific key type and object type in an object
const nameAgeMap = {
    'Alice': 21,
    'Bob': 25
};
const Raju = {
    name: 'Raju'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
const value = true; // a string cannot be used here since Exclude removed it from the type.
const point2 = {
    x: 10,
    y: 20
};
const point3 = {
    x: 10,
    y: 20
};
