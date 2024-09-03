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
console.log("Countdown initiated...")
const delay = ms => {
    const start = Date.now()
    while (Date.now() - start < ms) {}
}
delay(3000)
let count = 10
const intervalId = setInterval(() => {
    console.log(count)
    count--
    if (count < 0) {
    clearInterval(intervalId)
    setTimeout(() => {
        console.log("Liftoff!")
    }, 0)
    }
}, 1000)

