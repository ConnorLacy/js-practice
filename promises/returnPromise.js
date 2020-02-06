/* Helper method for Promise Definition */
getRandomNumber = (start = 1, end = 10) => {
    return parseInt(Math.random() * end) % (end-start+1) + start;
}

/* PROMISE DEFINITION
    Defines a promise that resolves randomly after random number of seconds
    using helper method getRandomNumber()
*/
var promiseDoublyRandom = (PDR = () => {
    return new Promise((resolve, reject) => {
        let randomNumSeconds = getRandomNumber(2, 10)
        setTimeout(() => {
            let randomSettle = getRandomNumber(1, 10)
            if (randomSettle > 5){
                resolve({
                    randomNumSeconds: randomNumSeconds,
                    randomSettle: randomSettle
                });
            } else {
                reject({
                    randomNumSeconds: randomNumSeconds,
                    randomSettle: randomSettle
                });
            }

        }, randomNumSeconds * 1000);
    });
});

var singleTonPromise = promiseDoublyRandom();

singleTonPromise.then((value) => {
    console.log("Singleton: Value when promise is resolved: ", value);
}, (reason) => {
    console.log("Singleton: Reason when promise is rejected: ", reason)
});

//Driver: Create 10 Promises
for(i=1; i<=10; i++){
    let loopPromise = promiseDoublyRandom()
    loopPromise.then((value) => {
        console.log("Loop Promise: Value when promise is resolved: ", value)
    }, (reason) => {
        console.log("Loop Promise: Reason when promise is rejected: ", reason)
    });
}
