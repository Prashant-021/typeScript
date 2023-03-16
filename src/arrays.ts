let stringArr = ['one', 'hey']

let guitars = ['Start', 'les Paul', 5150]

let mixedData = ['EvH', 1892, true]


console.log(stringArr[0])
// stringArr[0] = 12 //Type 'number' is not assignable to type 'string'.
guitars[2] = "hello"
console.log(guitars)
mixedData[3] = 12
console.log(mixedData)

stringArr[1] = true
stringArr[1] = 100

guitars[0] = 200
console.log(guitars)
guitars.unshift("world")
console.log(guitars)

let test = [] // any type
let test1: string[] = ['Hello', 'world']

//Tuple
let myTuple: [string, number,boolean] = ['Hello', 12, true]

let mixed = ['John', 1, false]

myTuple = mixed
myTuple[3] = 21

console.log(typeof myTuple);

// object
let myObj: object = {
    a : 12
}
console.log(typeof myObj);
console.log(myObj);
myObj = mixed
console.log(myObj);

const exampleObj = {
    prop1: 12,
    prop2: true
}
exampleObj.prop1 = false
exampleObj.prop1 = 21
console.log(exampleObj);

type demoType = {
    name: string,
    age: number,
    address: (number | string)[]
}

let details: demoType = {
    name: 'Prashant',
    age: 21,
    address: [192, 'Gajanand Park']
}

let testDetails: demoType = {
    name: 'testName',
    age: 13,
    address: [12, 'aerfd']
}
let testDetails1 = {
    name: 'testName',
    age: 13,
    address: [12, 'aerfd'],
    demo:12
}

details = testDetails1

console.log(details);

// how to make property optional

type demoType1 = {
    name: string,
    age?: number,
    address: (number | string)[]
}

const myFunc = (param: demoType) {
    return `Hello ${param.name}!`
}


// instead of type we can use interface
interface demoType2  {
    name: string
}


// enums
enum Grade {
    U,
    D,
    C,
    B,
    A
}
enum Grade1 {
    U=1,
    D,
    C,
    B,
    A
}