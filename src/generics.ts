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

function printVal<dataType>(value: dataType): void {
    console.log(value);
}

printVal<number>(12)
printVal<string>("Hello")
printVal<boolean>(true)

printVal([1,2,3]) // type is inferred to number[]


function printTwoVal<x,y>(X: x, Y: y): void {
    console.log(X,Y);
    
}

printTwoVal(12,true)
printTwoVal(12,[1,2,3])
printTwoVal(false,[1,2,3])


