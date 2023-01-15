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
            return substract(operand1, operand2);
        case "*":
            return multiply(operand1, operand2);
        case "/":
            return divide(operand1, operand2);
        default:
            return "Invalid operator";
    }

}


const display = document.querySelector('.display');
const button = document.querySelectorAll('.button');
const equalButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear-button');
const operatorButtons= document.querySelectorAll('.operator');

display.textContent="0";
let displayValue= "";
let firstOperand ="";
let secondOperand ="";
let operator= "";


function clearScreen(){
    
    display.textContent= "0"
    firstOperand="";
  secondOperand ="";
  operator= "";
  console.log("cleared!")
  displayValue= "";
}



function setOperator(){
    for(let i=0; i<operatorButtons.length; i++){
        operatorButtons[i].addEventListener('click',function(){
            operator = this.value

            console.log(operator);
        } );
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
        
        display.textContent ="";
        display.textContent= displayValue;
        displayValue +=this.value;
        display.textContent=displayValue;
        secondOperand= displayValue;

      
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


setOperator();
toDisplay();


