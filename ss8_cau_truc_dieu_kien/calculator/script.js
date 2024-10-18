let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value += number;
}

function setOperator(op) {
    if (currentInput === '') {
        return ;
    }
    operator = op;
    display.value += op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (operator === null || currentInput === '') {
        return ;
    }
    let result = 0;
    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    display.value = result;
    currentInput = result;
    operator = null;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    display.value = '';
}