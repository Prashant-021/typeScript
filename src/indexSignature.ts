console.log('Index Signature');

// Index Signature is used to create object when your don't 
// know the name of the object but you know the shape of the object
// you can declare keys and type of keys.

// TS needs Index Signature when you want to access the object 
// property dynamically.

interface TransactionObj {
    [index: string]: number
    //index cannot be boolean
}
// interface TransactionObj {
//     Pizza: number;
//     Books: number;
//     Job: number;
// }

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

// dynamically accessing the property

let prop: string = 'Pizza';    //Property 'prop' does not exist on type 'TransactionObj'.
console.log(todaysTransactions[prop])   //Element implicitly has an 'any' type because expression 
// of type 'string' can't be used to index type 'TransactionObj'.
// No index signature with a parameter of type 'string' 
// was found on type 'TransactionObj'.

const todaysNet = (transactions: TransactionObj):
    number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions));

console.log("Keyof keyword");


interface Student {
    [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student.test);

for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}

interface keyofStudent {
    // [key: string]:  string| number |number[]|undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const keyofstudent: keyofStudent = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student.test);

for (const key in keyofstudent) {
    console.log(`${keyofstudent[key as keyof keyofStudent]}`);
}
// When you don't know the interface or type of object
Object.keys(keyofstudent).map(key => {
    console.log(`hello ${keyofstudent[key as keyof typeof keyofstudent]}`);
})


const logStudentket = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);

}

logStudentket(student, 'name')
logStudentket(student, 'GPA')
logStudentket(student, 'classes')

// interface Streams {
//     [key: string]:number
// }
type Streams = 'salary' | 'bonus' | 'sidehustle'

type incomes = Record<Streams, number>

const monthlyIncome: incomes = {
    salary: 50000,
    bonus: 10000,
    sidehustle: 100000
}

for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue as keyof incomes]);
}



