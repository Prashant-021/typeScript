// unknown,any

function foo1(bar: any) {
    const a: string = bar; // no error
    const b: number = bar; // no error
    const c: { name: string } = bar; // no error
} function foo2(bar: unknown) {
    const a: string = bar; // 🔴 Type 'unknown' is not assignable to type 'string'.(2322)
    const b: number = bar; // 🔴 Type 'unknown' is not assignable to type 'number'.(2322)
    const c: { name: string } = bar; // 🔴 Type 'unknown' is not assignable to type '{ name: string; }'.(2322)
}

// Type Aliases allow defining types with a custom name (an Alias).
console.log("Functions")

type stringOrNumber = string | number

type stringOrNumberArray = stringOrNumber[]

type productType = {
    name?: string,
    price: number,
    desc: stringOrNumberArray
}


// interface productType1 = productType  | productType  // This is not possible interface cannot in type it is possible

// Literal types

let myName1: 'Prashant'
myName1 = 'Prashant S Patel'

let userName: 'Prashant' | 'John' | 'Amy'
userName = "John"

// functions

const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message);
}

logMsg('Hello');
logMsg(3);
logMsg(add(3, 2));

// arrow function

const arrowFunction = (param: number): number => {
    return param;
}

// Normal function

let normalFunction = function (param: number): number {
    return param;
}

// userDefined function type

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//      (a: number, b: number): number
// }
let addNums: mathFunction = (c, d) => {
    return c + d
}

addNums(2, 3)
addNums(2, '3') //Throw an error as string is not accepted

// optional prarameters
// optional prarameters always have to be last

const addAll = (a: number, b: number, c?: number):
    number => {
    if (typeof c !== 'undefined') {
        return a + b + c //'c' is possibly 'undefined'.
    }
    return a + b
}

// default parameter
const sumAll = (a: number = 10, b: number, c: number = 2):
    number => {
    return a + b + c
}

logMsg(sumAll(2, 3, 2));
logMsg(sumAll(undefined, 3, 2));


// rest parameters
const restFunc = function (...elem: number[]):
number {
    return elem.reduce((prev, curr) => prev + curr)
    
}


logMsg(restFunc(12,32,12))

// never type

const createError = (errMsg: string) => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i:number = 1
    while(true){
        i++;
        if(i>100 ) break
    }
};


// custom type guard
let typeGuard = (value: any):boolean => {
    return typeof value ==='number'?true:false;
}

// use of never type
const numberOrString = function (value: number|string):
string{
    if(typeof value === 'string') return 'string'
    if(typeof value === 'number') return 'number'
    return createError('This should never happen')
}