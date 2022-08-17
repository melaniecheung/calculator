const previousNum = document.querySelector('.previousNum');
const currentNum = document.querySelector('.currentNum');

const numberBtn = document.querySelectorAll('.digits');
numberBtn.forEach((button) => {
    button.addEventListener('click', () => {
        updateDisplay(button.innerText);
    });
});

const operationBtn = document.querySelectorAll('.operation');
operationBtn.forEach((button) => {
    button.addEventListener('click', () => {
        setOperation(button.id);
    });
});

function setOperation(operator) {
    if (currentNum.textContent === '') return;
    if (previousNum !== '') {
        operate()
    }
    updateDisplay(' ' + operator);
    previousNum.textContent = currentNum.textContent;
    currentNum.textContent = '';
    currentOperation = operator;
}

const equalsBtn = document.querySelector('.equals');
equalsBtn.onclick = function() {
    let currentOperationString = currentOperation.toString();
    let previousNumInt = parseFloat(previousNum.textContent);
    let currentNumInt = parseFloat(currentNum.textContent);
    let answer = operate(currentOperationString, previousNumInt, currentNumInt);
    currentNum.textContent = answer;
    console.log(answer)
}

const clearBtn = document.querySelector('.clear');
clearBtn.onclick = function() {
    currentNum.textContent = '';
    previousNum.textContent = '';
}

const deleteBtn = document.querySelector('.delete');
deleteBtn.onclick = function() {
 if (currentNum.textContent != '') {
        currentNum.textContent = currentNum.textContent.slice(0, -1);
    } else if (previousNum.textContent != '') {
        previousNum.textContent = previousNum.textContent.slice(0, -1);
    }
}

function updateDisplay(value) {
    currentNum.textContent += value;
}

const dotBtn = document.querySelector('.dot');
dotBtn.onclick = function() {
    if (currentNum.textContent == '') {
        currentNum.textContent += '0.';
    } else if (currentNum.textContent != '') {
        let check = currentNum.textContent.split('');
        if (!check.includes('.')) {
            console.log(check);
            currentNum.textContent += '.';
        }
    } 
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
}