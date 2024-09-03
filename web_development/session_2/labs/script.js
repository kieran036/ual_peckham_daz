
// Task 1: Create a JavaScript file (script.js) that declares variables for your name, age, and favorite hobby. Output these variables to the console.
const name = "Kieran";
var age = 27;
var favHobby = "Squash";

console.log(name, age, favHobby)

// Task 2a: Implement JavaScript code that calculates the sum of two predefined numbers and outputs the result to the console.
var x = 10;
var y = 5;
var z = x + y;
console.log(z)
console.log(15 + 5)

// Task 2b: Modify the previous code to calculate the difference between the same two numbers and output the result to the console. Uses -

// Task 2c: Extend the code to calculate the product of the two numbers and output the result to the console. Uses *

// Task 2d: Further extend the code to calculate the quotient of the two numbers and output the result to the console. Uses /

// Task 3: Write JavaScript code that checks if a given number is even or odd. Output the result to the console.
function oddEven(inputNumber) {
    if (inputNumber % 2 == 0) {
        console.log("number is even")
    } else {
        console.log("number is odd")
    }
}

oddEven(5)

// Alternative function
inputNumber2 = 17;
// Turnary operator, https://www.geeksforgeeks.org/ternary-operator-in-programming/
inputNumber2 % 2 == 0 ? "number is even" : "number is odd";

// Task 4: Create JavaScript code that stores your favorite fruits in an array. Use a for loop to output each fruit to the console.
var favouriteFoods = ["Pizza", "Pasta", "Bread", "Waffles"];
console.log(favouriteFoods[1]);

for (let i = 0; i < 4; i++) {
    console.log(favouriteFoods[i], i)
};

// Alternative for loop
for (food in favouriteFoods) {
    console.log(favouriteFoods[food], food)
}

// Task 5a: Learn how to manipulate HTML elements using JavaScript. Task: Create a button and a paragraph in your existing HTML document. When the button is clicked, change the text content of the paragraph to display a personalized message.

// Defines the DOM element from the HTML using Id
const button1 = document.getElementById("button");

// Defines the DOM element from html that will be manipulated if a condition met.
const paragraph = document.getElementById("paragraph");
// Initialises id="paragraph" to be hidden
paragraph.style.display = "none";

// Adds the action which will be monitored and the conditions to display the DOM element, here we add a click event listener to the element.
button1.addEventListener("click", displayParagraph);

// Defines function to show element upon recieving the user interaction. If it's clicked and hidden then show, if it's clicked and shown then hide.
function displayParagraph() {
    console.log("button clicked")

    if (paragraph.style.display === "none") {
        // The above is essentially CSS denoted by .style
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none"
    }
}

//Task 5b:

/*Task 6:
    HTML Structure: Basic HTML setup for the to-do list.
    JavaScript Functions: Functions to add, remove, and mark tasks as complete.
    Event Listeners: Handling user interactions like adding or removing tasks.
*/
