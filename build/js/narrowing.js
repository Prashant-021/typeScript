"use strict";
console.log('Narrowing');
// function padLeft(padding: number|string,input:string):string {
//     throw new Error("Not implemented");
// }
// function padLeft(padding: number | string, input: string): string {
//     return "".repeat(padding) + input;                              //Argument of type 'string | number' is not assignable to parameter of type 'number'.
//                                                                     // Type 'string' is not assignable to type 'number'.
// }
console.log('typeof typeguard');
function padLeft(padding, input) {
    if (typeof padding === 'number') {
        return "".repeat(padding) + input;
    }
    return padding + input;
}
// function printAll(strs: string | string[] | null) {
//     if (typeof strs === 'object') {
//         for (const s of strs) {             // throws error strs may be null, Object is possiblly null
//             console.log(s);
//         } 
//     }else if (typeof strs === 'string'){
//         console.log(strs);   
//     }else{
//         // do nothing
//     }
// }
console.log('Thruthiness Narrowing');
function getUsersOnlineMessage(numUsersOnline) {
    if (numUsersOnline) {
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}
// console.log(getUsersOnlineMessage(3));
// console.log(getUsersOnlineMessage());
// console.log(getUsersOnlineMessage(undefined));
// console.log(getUsersOnlineMessage(null));
