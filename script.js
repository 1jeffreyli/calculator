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

const zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
    displayText.innerText="";
    const div = document.createElement("div");
    div.innerText = "0"
    display.appendChild(div);
})