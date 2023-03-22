console.log("Basic Types");

let myName1 = "Prashant"
let age: number;
let stringType: string = "This is string"
let boolTyoe: boolean = true
let anyType: any;
let unionType: string | number;

// myName1 = 21 //this is throw an error
myName1 = 'Prashant Patel' //It will accept any string value
age = 21

anyType = "Hello"
anyType = 21
anyType = true

unionType = "hello"
unionType = 12
// unionType = true // Type 'boolean' is not assignable to type 'string | number'.

const sum = (a:boolean, b:string) => { 
    return a + b;  
}


let re: RegExp = /\w+/g


let nullVal: null = null
let undefinedVal: undefined = undefined