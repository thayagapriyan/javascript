// closure is a function is bundled together with its lexical environment
// A closure gives you access to an outer function's scope from an inner function

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    };
}
const newFunction = outerFunction('outside');
newFunction('inside'); // logs 'outside' and 'inside'

function makeCounter() {
    let count = 0; // count is a private variable
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

function outer() {
    let count = 0; // count is a private variable
    function inner1() {
        count++;
        function inner2() {
            count++;
            return count;
        }
        return inner2();
    }
    return inner1;
}
const count = outer();
console.log(count()); // 2
console.log(count()); // 4
console.log(count()); // 6


// Example of closure with multiple nested functions
function z() {
    var a =7;
    console.log(a);
    function x() {
        var b = a + 5;
        console.log(b);
        function y() {
            var c = b + 3;
            console.log(c);
        }
        y();
    }
    x();
}
z(); // 15