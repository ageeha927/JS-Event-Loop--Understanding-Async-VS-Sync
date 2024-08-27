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
