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
log;
