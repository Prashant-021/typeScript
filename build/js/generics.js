"use strict";
// const arr1:numberArray = ["1",2] // throws and error number is not assignable to string 
// const arr2:stringArray = ["1",12] // throws and error string  is not assignable to number
const arr1 = [1, 2, 3];
const arr2 = ["hello", "world"];
function printVal(value) {
    console.log(value);
}
printVal(12);
printVal("Hello");
printVal(true);
printVal([1, 2, 3]); // type is inferred to number[]
function printTwoVal(X, Y) {
    console.log(X, Y);
}
printTwoVal(12, true);
printTwoVal(12, [1, 2, 3]);
printTwoVal(false, [1, 2, 3]);
