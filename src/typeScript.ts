type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific types


// using as keyword
let a12: One = 'Hello';
let b12 = a as Two      // Less specific
let c12 = b as Three    // more specific


// using <> 
let x: unknown = 'hello';
console.log((<string>x).length);

// Force casting
let x12 = 'hello';
console.log(((x12 as unknown) as number).length); // x is not actually a number so this will return undefined


function createPair<typeX,typeY>(x: typeX, y: typeY): [typeX, typeY] {
    return [x, y];
}
console.log(createPair<string, number>('hello',2));
