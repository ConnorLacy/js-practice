var promise1 = Promise.reject("Not Interested")
promise1.then((value) => {
    console.log("Promise 1: This will not print as it is a resolved promise. The resolved value is", value)
}, (reason) => {
    console.log("Promise 1: This prints as it is a rejected promise. The reason is", reason)
});

console.log('Promise1: ', promise1)

var promise2 = Promise.resolve(2)
promise2.then((value) => {
    console.log("Promise 2: This will print as it is a resolved promise. Resolved value: ", value)
}, (reason) => {
    console.log("Promise 2: This will not print as it is a resolved promise, not rejected. Reason: ", reason)
});