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

// console.log(operate("add", 2, 3));

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
function saveCalculation () {
    displayValue.push(`${this.classList[0]}`);
    display.innerText = "";
}
function doCalculation () {
    operatorArr.forEach(item => {
        item.addEventListener("click", saveCalculation);
    });
}
doCalculation();

// addButton.addEventListener("click", () => {
//     displayValue.push("add");
//     display.innerText = "";
// })

// when the equal button is clicked, it carries out the x, y operation and displays it
equal.addEventListener("click", () => {
    display.innerText = "";
    const div = document.createElement("div");
    div.innerText = operate(displayValue[1], parseInt(displayValue[0]), parseInt(displayValue[2]));
    div.style.color = "black";
    display.appendChild(div);
})

// const zero = document.querySelector(".zero");
// zero.addEventListener("click", () => {
//     displayText.innerText = "";
//     const div = document.createElement("div");
//     div.innerText = "0"
//     display.appendChild(div);
// })

// when A/C button is clicked, it clears the displayValue array and the text displayed
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    displayValue.length = 0;
    display.innerText= "";
})