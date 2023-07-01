let currentval = "";
let operand = "";
let newval = "";
let result = "";
const buttons = document.querySelectorAll("button");
const result_text = document.getElementById("result");







buttons.forEach((button) => 
    button.addEventListener('click', () => input(button.textContent))
)

function input(x){
    if (isNaN(x) && newval != ""){
        if (x == "="){
            result = operate(currentval, operand, newval);
            result_text.innerHTML = result;
            clearMemory();
        } else {
            operand = x;
            currentval = newval;
            newval = "";
        }
        operand = x;
    } else {
        newval = "" + newval + x;
        result_text.innerHTML = newval;
    }
}


function clearMemory() {
    currentval = "";
    operand = "";
    newval = "";
    result = "";
}

// calculation functions
function add (x, y) {
    return Number(x) + Number(y);
}

function subtract (x, y) {
    return Number(x) - Number(y);
}

function multiply (x, y) {
    return x * y;

}

function divide (x,y) {
    return x / y;
}

function operate(x, op, y){
    switch (op) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "×":
            return multiply(x, y);
        case "÷":
            return divide(x, y);
    }

}