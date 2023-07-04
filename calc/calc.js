let currentval = "";
let operand = "";
let newval = "";
let result = "";
const buttons = document.querySelectorAll("button");
const result_text = document.getElementById("result");
const hold_text = document.getElementById("hold");


buttons.forEach((button) => 
    button.addEventListener('click', () => input(button.textContent))
)

function input(x){
    if (isNaN(x) && newval != ""){
        if (x == "="){
            result = operate(currentval, operand, newval);
            result_text.innerHTML = result;
            hold_text.innerHTML = "";
            clearMemory();
        } else if (x === "Clear") {
            clearMemory();
        } else {
            if (operand == ""){
                operand = x;
                currentval = newval;
                newval = "";
            } else {
                currentval = operate(currentval, operand, newval);
                hold_text.innerHTML = currentval;
                operand = x; 
                newval = "";               
            }
        }
    } else {
        newval = "" + newval + x;
        hold_text.innerHTML = newval;
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
    return Number(x) * Number(y);

}

function divide (x, y) {
    return Number(x) / Number(y);
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