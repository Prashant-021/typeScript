console.log("Union types");

function kgToLbs(weight: number | string): number {
    // weight.                          //can access only common properties of number and string
    if(typeof weight === "number")
        // return weight.               //can access all properties of number
        return weight
    else{
        // weight.                      //can access all properties of string
        return parseInt(weight)
    }
}



console.log("Intersection Types");

type draggable = {
    drag: () => void;
}

type resizable = {
    resize: () => void;
}

type uiWidget = draggable & resizable; //type intersection

let widget: uiWidget = {
    drag() {

    },
    resize() {

    }
}


console.log("Literal types");

// To limit the values we use literal types

type numbers = 50| 100
// let num: numbers = 41    //Type '41' is not assignable to type 'numbers'.
let num: numbers = 50;      //Valid
let num1: numbers = 100;      //Valid

type metrics = 'cm' | 'inch'
let height: metrics = 'cm'
// let width: metrics = 'meter'    //Type '"meter"' is not assignable to type 'metrics'.



console.log('NUllable types');
function greet (name: string | null | undefined){
    if(name)
        console.log(name);
    else{
        console.log('Hola!');
    }
}

greet(null)
greet(undefined)
