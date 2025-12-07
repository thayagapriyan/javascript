//Currying: transforming a function that takes multiple arguments into a sequence of functions each taking a single (or fewer) argument, returning a new function until all arguments are supplied.
function multiply(a) {
    console.log(a);
    return function(b) {
        console.log(a,b);
        return function(c) {
            console.log("Multiplying:", a, "*", b, "*", c);
            console.log(a * b * c);
            return a * b * c;
        }
    };
}
// Usage
const result = multiply(2);
const re = result(3);
console.log(result.toString());
console.log(result());
console.log(re());