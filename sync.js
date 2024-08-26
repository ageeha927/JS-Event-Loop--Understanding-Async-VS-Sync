//Problem #1
console.log("This is synchronous")
setTimeout(() => {
    console.log("This is asynchronous");
}, "2000");
console.log("End of script")

//Problem #2
console.log("Interval started (sync)")
setTimeout(() => {
setInterval(() => {
    console.log("Repeating message... (async)")
}, "3000")}, "10000")
