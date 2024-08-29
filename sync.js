//Problem #1
console.log("This is synchronous")
setTimeout(() => {
    console.log("This is asynchronous");
}, "2000");
console.log("End of script")

//Problem #2
console.log("Interval started")
const interval = setInterval(() => {
    console.log("Repeating message...")
}, 3000)
setTimeout(() => {
    clearInterval(interval)
}, 10000)

//Problem #3
const fs = require('fs');
setTimeout(() => { //async
    const file = fs.readFileSync('input.txt', 'utf-8')
    console.log(file)
}, "2000");
console.log(fs.readFileSync('input.txt', 'utf-8')) //sync

//the sync appeared before the async 

//Problem #4
console.log(fs.readFileSync('data.txt', 'utf-8')) //sync
setTimeout(() => { //async
    console.log('Starting async operation..')
    const file = fs.readFileSync('data.txt', 'utf-8')
    console.log(file)
}, "2000");
console.log("Script complete")

//Problem 5
console.log("Count down started")


