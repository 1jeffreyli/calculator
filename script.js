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


function saveCalculation () {
    operatorItem.push(`${this.classList[0]}`);
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

let secondDisplayValue = [];
function secondValue() {
    secondDisplayValue.push(displayValue.join(""));
}

// when the equal button is clicked, it carries out the x, y operation and displays it
// the operator function takes in the operator saved as a string at index 0 of the operatorItem array
// then takes the first display value, numbers to the left of the operator which were stored as string elements
// in an array and then joined together
// and takes the second value which is to the right of the operator, also stored in an array and joined
equal.addEventListener("click", () => {
    display.innerText = "";
    const div = document.createElement("div");
    secondValue();
    div.innerText = operate(operatorItem[0], parseInt(firstDisplayValue), parseInt(secondDisplayValue));
    div.style.color = "black";
    display.appendChild(div);
})

// the above function can only do one operation at a time and A/C must be clicked to do next calculation
// next step is to allow chain operations, so clearing the display of the old result and showing the new number
// that was clicked, storing that old result before operating on it with value z

// when A/C button is clicked, it clears the text displayed and all array values
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    displayValue.length = 0;
    display.innerText= "";
    firstDisplayValue.length = 0;
    secondDisplayValue.length = 0;
    operatorItem.length = 0;
})