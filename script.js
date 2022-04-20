function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        alert("Please do not try to divide by zero.");
        return "";
    }
    return x / y;
}

function operate(operator, x, y) {
    switch(operator) {
        case "add":
            return add(x, y);
        case "subtract":
            return subtract(x, y);
        case "multiply":
            return multiply(x, y);
        case "divide":
            return divide(x, y);
    }
}

const display = document.querySelector(".display");
const displayText = document.querySelector(".displaytext");
const numbersArr = [...document.querySelectorAll(".todisplay")];
let displayValue = [];

function displayNumber() {
    numbersArr.forEach(item => {
        item.addEventListener("click", () => {
            displayText.innerText = "";
            const div = document.createElement("div");
            div.innerText = `${item["innerText"]}`;
            div.style.color = "black";
            display.appendChild(div);
            displayValue.push(div.innerText);
        });
    });
}
displayNumber();

// function checkDisplay() {
//     if(equalResult.length > 0 || displayValue.length > 0) {

//     }
// }

// grab the operators in the DOM
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const equal = document.querySelector(".equal");

// refactor operator functions with forEach
const operatorArr = [...document.querySelectorAll(".calculation")];
let operatorItem = [];
let firstDisplayValue = [];

// chose to set the zero index equal to the operator string instead of push because pushing
// continually adds to the array whereas this way replaces the previous operator

function saveCalculation () {
    if (equalResult.length > 0) {
        operatorItem.length = 0;
        operatorItem[0] = `${this.classList[0]}`;
        display.innerText = "";
    } else if (displayValue.length === 0) {
        operatorItem[0] = `${this.classList[0]}`;
        display.innerText = "";    
    }
    operatorItem[0] = `${this.classList[0]}`;
    firstDisplayValue.push(displayValue.join(""));
    displayValue.length = 0;
    display.innerText = "";
}

function doCalculation () {
    operatorArr.forEach(item => {
        item.addEventListener("click", saveCalculation);
    });
}
doCalculation();

// a function that stores the numbers to the right of an operator in an empty array, then resets
// the displayValue array
let secondDisplayValue = [];
function secondValue() {
    secondDisplayValue[0] = displayValue.join("");
    displayValue.length = 0;
}

// when the equal button is clicked, it first checks if this is the first operation by checking
// the equalResult array's length, where > 0 means this isn't the first operation
// then it carries out the x, y operation and displays it
// the operator function takes in the operator saved as a string at index 0 of the operatorItem array
// then takes the first display value, numbers to the left of the operator which were stored as string elements
// in an array and then joined together
// and takes the second value which is to the right of the operator, also stored in an array and joined
let equalResult = [];

equal.addEventListener("click", () => {
    if (equalResult.length > 0) {
        display.innerText = "";
        secondValue();
        equalResult[0] = operate(operatorItem[0], parseInt(equalResult[0]), parseInt(secondDisplayValue[0]));
        display.innerText = equalResult[0];
        display.style.color = "black";
    } else {
    display.innerText = "";
    const div = document.createElement("div");
    secondValue();
    div.innerText = operate(operatorItem[0], parseInt(firstDisplayValue[0]), parseInt(secondDisplayValue[0]));
    div.style.color = "black";
    display.appendChild(div);
    equalResult[0] = div.innerText;
    operatorItem.length = 0;
    }
})

// when A/C button is clicked, it clears the text displayed and all array values
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    displayValue.length = 0;
    display.innerText= "";
    firstDisplayValue.length = 0;
    secondDisplayValue.length = 0;
    operatorItem.length = 0;
    equalResult.length = 0;
g})

// next steps:
// refactoring some of the DOM code
// round answers
// check TOP's extra credit tasks
// making the decimal button functional and accepting decimals as an input
// adding a backspace button
// adding keyboard support