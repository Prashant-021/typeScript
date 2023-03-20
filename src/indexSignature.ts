console.log('Index Signature');

// Index Signature is used to create object when your don't 
// know the name of the object but you know the shape of the object
// you can declare keys and type of keys.

// TS needs Index Signature when you want to access the object 
// property dynamically.

interface TransactionObj {
    [index:string]:number 
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

log

