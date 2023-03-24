/*
Generics provide variables to types. 
A common example is an array. An array without generics 
could contain anything. An array with generics can 
describe the values that the array contains.
*/
type numberArray = Array<number>
type stringArray = Array<string>

// const arr1:numberArray = ["1",2] // throws and error number is not assignable to string 
// const arr2:stringArray = ["1",12] // throws and error string  is not assignable to number

const arr1: numberArray = [1,2,3]
const arr2: stringArray = ["hello", "world"]