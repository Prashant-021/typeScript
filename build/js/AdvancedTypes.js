"use strict";
console.log("Union types");
function kgToLbs(weight) {
    // weight.                          //can access only common properties of number and string
    if (typeof weight === "number")
        // return weight.               //can access all properties of number
        return weight;
    else {
        // weight.                      //can access all properties of string
        return parseInt(weight);
    }
}
console.log("Intersection Types");
let widget = {
    drag() {
    },
    resize() {
    }
};
console.log("Literal types");
// let num: numbers = 41    //Type '41' is not assignable to type 'numbers'.
let num = 50; //Valid
let num1 = 100; //Valid
let height = 'cm';
// let width: metrics = 'meter'    //Type '"meter"' is not assignable to type 'metrics'.
console.log('NUllable types');
function greet(name) {
    if (name)
        console.log(name);
    else {
        console.log('Hola!');
    }
}
greet(null);
greet(undefined);
