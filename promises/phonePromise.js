console.log('Universe A: Let me see if my mom can honor her promise...')
var momsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        momsSavings = 20000
        priceOfPhone = 60000

        if(momsSavings > priceOfPhone){
            resolve({
                brand: "iPhone",
                model: "11 Pro Max"
            });
        } else {
            reject("we do not have enough savings. Let us save some more money")
        }
    }, 3 * 1000)
}).then((value) => {
    console.log("Universe A: Yay I finally got my ", JSON.stringify(value));
}).catch((reason) => {
    console.log("Universe A: Mom couldn't honor her promise beacuse ", reason)
}).finally(() => {
    console.log("Universe A: No matter what happens, I love her always!")
});


//Combined catch and then into same function body
console.log('Universe B: Let me see again if my mom can honor her promise...')
var momsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        momsSavings = 200000
        priceOfPhone = 60000

        if(momsSavings > priceOfPhone){
            resolve({
                brand: "iPhone",
                model: "11 Pro Max"
            });
        } else {
            reject("we do not have enough savings. Let us save some more money")
        }
    }, 2 * 1000)
}).then((value) => {
    console.log("Universe B: Yay I finally got my ", JSON.stringify(value));
    }, (reason) => {
    console.log("Universe B: Mom couldn't honor her promise beacuse ", reason)
    }).finally(() => {
    console.log("Universe B: No matter what happens, I love her always!")
    });