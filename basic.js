
// Variables
const greeting = "Hello, World!";
let count = 0;

// Function to display a greeting
function sayHello(name) {
    return `Hello, ${name}!`;
}

// Arrow function example
const add = (a, b) => a + b;

// Array methods example
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const sum = numbers.reduce((acc, num) => acc + num, 0);

// Object example
const person = {
    name: "John",
    age: 30,
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};

// Class example
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }
}

// Async/Await example
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Console outputs
console.log(greeting);
console.log(sayHello("JavaScript"));
console.log("2 + 3 =", add(2, 3));
console.log("Doubled:", doubled);
console.log("Sum:", sum);
console.log(person.greet());

const dog = new Animal("Dog");
console.log(dog.speak());
