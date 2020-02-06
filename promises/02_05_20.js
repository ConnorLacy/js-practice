/* 
    Promise Syntax: 
    new Promise(function(resolve,reject){...});

    A promise accepts a function as an argument with two params,
    resolve & reject

    function parameter will handle the asynchronous operations.

    If successful, expected result returned by calling the 'resolve' function
    If fails, reason for failure passed by calling 'reject' function
    
*/

var keepsHisWord
keepsHisWord = true

promise1 = new Promise((resolve,reject) => {
    if(keepsHisWord){
        resolve("The man likes to keep his word")
    } else {
        reject("The man does not like to keep his word")
    }
});

console.log('Promise 1: ', promise1);

promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            message: "The man likes to keep his word",
            code: "aManKeepsHisWord"
        });
    }, 2 * 1000);
});

console.log('Promise 2: ', promise2)

setTimeout(() => {
    console.log('Promise 2: ', promise2)
}, 2*1000)

keepsHisWord = false;
message = ""
promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(keepsHisWord){
            resolve()
        } else {
            reject()
        }
    }, 2*1000)
}).then(() => {
    console.log("Promise3: Resolved! The man likes to keep his word")
}).catch(() => {
    console.log("Promise3: Rejected. Now handling this properly")
});

console.log('Promise 3: ', promise3)