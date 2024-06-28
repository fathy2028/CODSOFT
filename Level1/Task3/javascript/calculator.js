let displayValue = '0';
let operand1 = null;
let operand2 = null;
let operator = null;

const display = document.getElementById('display');

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    operand1 = null;
    operand2 = null;
    operator = null;
    display.textContent = displayValue;
}

function calculate() {
    let expression = displayValue;
    if (expression.includes('+')) {
        [operand1, operand2] = expression.split('+').map(Number);
        operator = '+';
    } else if (expression.includes('-')) {
        [operand1, operand2] = expression.split('-').map(Number);
        operator = '-';
    } else if (expression.includes('*')) {
        [operand1, operand2] = expression.split('*').map(Number);
        operator = '*';
    } else if (expression.includes('/')) {
        [operand1, operand2] = expression.split('/').map(Number);
        operator = '/';
    }
    
    switch (operator) {
        case '+':
            displayValue = operand1 + operand2;
            break;
        case '-':
            displayValue = operand1 - operand2;
            break;
        case '*':
            displayValue = operand1 * operand2;
            break;
        case '/':
            if (operand2 === 0) {
                displayValue = 'Error';
            } else {
                displayValue = operand1 / operand2;
            }
            break;
        default:
            displayValue = 'Error';
    }
    
    display.textContent = displayValue;
}
