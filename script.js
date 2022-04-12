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

function displayNumber() {
    numbersArr.forEach(item => {
        item.addEventListener("click", () => {
            displayText.innerText = "";
            const div = document.createElement("div");
            div.innerText = `${item["innerText"]}`;
            display.appendChild(div);
        });
    });
}
displayNumber();

// a function that changes the display to show the number being clicked
// function displayNumber(number) {
//     displayText.innerText = "";
//     const div = document.createElement("div");
//     div.innerText = `${this}`;
//     display.appendChild(div);
// }

// function addNumberEvent(item) {
//     this.addEventListener("click", displayNumber());
// }

// toDisplay.forEach(addNumberEvent);

// must set up a forEach function that adds the onclick eventListener to each number button
// the click event should call a function that sets the display's innerText to the array item's
// innerText because each array item in toDisplay (the array) has its number in the innerText property

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