"use strict";
console.log('Index Signature');
// interface TransactionObj {
//     Pizza: number;
//     Books: number;
//     Job: number;
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
// dynamically accessing the property
let prop = 'Pizza'; //Property 'prop' does not exist on type 'TransactionObj'.
console.log(todaysTransactions[prop]); //Element implicitly has an 'any' type because expression 
// of type 'string' can't be used to index type 'TransactionObj'.
// No index signature with a parameter of type 'string' 
// was found on type 'TransactionObj'.
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
console.log("Keyof keyword");
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
const keyofstudent = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test);
for (const key in keyofstudent) {
    console.log(`${keyofstudent[key]}`);
}
// When you don't know the interface or type of object
Object.keys(keyofstudent).map(key => {
    console.log(`hello ${keyofstudent[key]}`);
});
const logStudentket = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentket(student, 'name');
logStudentket(student, 'GPA');
logStudentket(student, 'classes');
const monthlyIncome = {
    salary: 50000,
    bonus: 10000,
    sidehustle: 100000
};
for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue]);
}
