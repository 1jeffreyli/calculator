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

console.log(operate("add", 2, 3));

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

// a function that stores the first number before also storing the operator clicked, then calls operate() on them
// when the user presses the equal button

// const zero = document.querySelector(".zero");
// zero.addEventListener("click", () => {
//     displayText.innerText = "";
//     const div = document.createElement("div");
//     div.innerText = "0"
//     display.appendChild(div);
// })

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    display.innerText="";
})