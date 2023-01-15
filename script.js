function add (operand1,operand2){
    return operand1 + operand2;
};

function substract (operand1,operand2){
    return operand1 - operand2;
};

function multiply (operand1,operand2){
    return operand1 * operand2;
};

function divide(operand1,operand2){
    return operand1 / operand2;
};

function operate(operator, operand1, operand2) {
    switch (operator) {
        case "+":
            return add(operand1, operand2);
        case "-":
            return subtract(operand1, operand2);
        case "*":
            return multiply(operand1, operand2);
        case "/":
            return divide(operand1, operand2);
        default:
            return "Invalid operator";
    }

}


const display = document.querySelector('.display');
const button = document.querySelectorAll('button');
const equalButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear-button');
const operatorButtons= document.querySelectorAll('.operator');


let displayValue= 0;
let firstOperand ="";
let secondOperand ="";
let operator= "";


function clearScreen(){

 
  secondOperand ="";
  operator= "";
  display.innerHTML="0";
}



function setOperator() {
    operator = this.value;
    
};

function setOperatorAfterClick(){
    for(let i=0; i<operatorButtons.length; i++){
        operatorButtons[i].addEventListener('click',setOperator);
    }
    
}



function displayAfterclick(){
    if (operator === ""){
        if (display.innerHTML === "0") {
            display.innerHTML = "";
        } 
        display.innerHTML += this.value;
        firstOperand = display.innerHTML;
    } else {
        if (display.innerHTML !== "0") {
            display.innerHTML += this.value;
            secondOperand = display.innerHTML.substring(firstOperand.length + 1);
        } else {
            firstOperand = "0";
            display.innerHTML = "";
            display.innerHTML += this.value;
            secondOperand = display.innerHTML.substring(2);
        }
    }
    console.log(firstOperand);
    console.log(secondOperand);
};

const toDisplay= () =>{
    for(let i= 0; i<button.length; i++){
            button[i].addEventListener('click',displayAfterclick);
            
    }
    
}


clearButton.addEventListener('click',clearScreen);
equalButton.addEventListener('click', function() {
    let result = operate(operator, Number(firstOperand), Number(secondOperand));
    display.textContent = result;
});


setOperatorAfterClick();
toDisplay();


