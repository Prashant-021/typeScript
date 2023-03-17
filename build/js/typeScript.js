"use strict";
// convert to more or less specific types
// using as keyword
let a12 = 'Hello';
let b12 = a; // Less specific
let c12 = b; // more specific
// using <> 
let x = 'hello';
console.log(x.length);
// Force casting
let x12 = 'hello';
console.log(x12.length); // x is not actually a number so this will return undefined
function createPair(x, y) {
    return [x, y];
}
console.log(createPair('hello', 2));
