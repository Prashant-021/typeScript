"use strict";
// unknown,any
function foo1(bar) {
    const a = bar; // no error
    const b = bar; // no error
    const c = bar; // no error
}
function foo2(bar) {
    const a = bar; // 🔴 Type 'unknown' is not assignable to type 'string'.(2322)
    const b = bar; // 🔴 Type 'unknown' is not assignable to type 'number'.(2322)
    const c = bar; // 🔴 Type 'unknown' is not assignable to type '{ name: string; }'.(2322)
}
// Type Aliases allow defining types with a custom name (an Alias).
console.log("Functions");
// interface productType1 = productType  | productType  // This is not possible interface cannot in type it is possible
// Literal types
let myName1;
myName1 = 'Prashant S Patel';
let userName;
userName = "John";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(3);
logMsg(add(3, 2));
// arrow function
const arrowFunction = (param) => {
    return param;
};
// Normal function
let normalFunction = function (param) {
    return param;
};
// interface mathFunction {
//      (a: number, b: number): number
// }
let addNums = (c, d) => {
    return c + d;
};
addNums(2, 3);
addNums(2, '3'); //Throw an error as string is not accepted
// optional prarameters
// optional prarameters always have to be last
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c; //'c' is possibly 'undefined'.
    }
    return a + b;
};
// default parameter
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(2, 3, 2));
logMsg(sumAll(undefined, 3, 2));
// rest parameters
const restFunc = function (...elem) {
    return elem.reduce((prev, curr) => prev + curr);
};
logMsg(restFunc(12, 32, 12));
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
let typeGuard = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of never type
const numberOrString = function (value) {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('This should never happen');
};
