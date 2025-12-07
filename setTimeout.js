console.log("start");

/* setTimeout(() => {
    console.log("setTimeout executed");
}, 0); */


function delayedLog() {
    console.log("delayedLog executed");
}
setTimeout(delayedLog, 0);

console.log("end");