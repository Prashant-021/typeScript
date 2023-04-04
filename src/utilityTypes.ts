// TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.
// following are the utility types 

// 1. Partial       - changes all the properties to be optional

interface Point {
    x: number,
    y: number
}

const point: Partial<Point> = {} // x and y are optional
point.x = 12

// 2. required      - changes all the properties to be required 

interface Details {
    name: string,
    age: number,
    dob?: string
}

const person: Required<Details> = {  // throws an error if name and age is not defined
    name: "Prashant",
    age: 21,
    dob: "21/08/01"     // ir forces to declare although it is optional
}

// 3. Omit          - Removes keys from object type

interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};

// 4. Record        - shortcut of defining a specific key type and object type in an object

const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
};

// 5. Pick          - Removes all properties but keeps the specific property

interface Person {
    name: string;
    age: number;
    location?: string;
}

const Raju: Pick<Person, 'name'> = {
    name: 'Raju'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};

// 6. Exclude       - Remove types from a union

type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.

// 7. Returntype    - Extracts the return type of a function type

type PointGenerator = () => { x: number; y: number; };
const point2: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

// 8. Parameter     - Extracts parameters type as an array from function type

type PointPrinter = (p: { x: number; y: number; }) => void;
const point3: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};