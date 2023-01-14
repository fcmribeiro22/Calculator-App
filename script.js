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

function operate(operation,operand1,operand2){
    return operation(operand1,operand2);
};

function test(){
    console.log(operator);
}



const display = document.querySelector('.display');
const button = document.querySelectorAll('button');
const equalButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear-button');
const operatorButtons= document.querySelectorAll('.operator');

document.querySelector('.weird-button').disabled = true;
document.querySelector('.percentage-button').disabled = true;

let displayValue= 0;
let firstOperand ="";
let secondOperand ="";
let operator= "";



function displayAfterclick(){

   if (display.innerHTML==="0"){
    display.innerHTML ="";
    display.innerHTML += this.value;
    

} else{
    display.innerHTML += this.value;
}
displayValue= display.innerHTML;

}

function setOperator() {
    operator = this.value;
    
};

function getOperator(){
    for(let i=0; i<operatorButtons.length; i++){
        operatorButtons[i].addEventListener('click',setOperator);
            }
            
}



const toDisplay= () =>{
    for(let i= 0; i<button.length; i++){
            button[i].addEventListener('click',displayAfterclick);
            
    }
    
}




getOperator();
toDisplay();









// let displayValue = " ";

// function updateDisplay(value) {
//     if (display.innerHTML === "0") {
//         display.innerHTML = value;
//     } else {
//         display.innerHTML += value;
//     }
// }

// function updateDisplayValue() {
//     displayValue = display.innerHTML;
    
// }

// function displayAfterClick() {
//     updateDisplay(this.value);
//     updateDisplayValue();
// }

// const toDisplay = () => {
//     for (let i = 0; i < button.length; i++) {
//         button[i].addEventListener("click", displayAfterClick);
//     }
// };

// toDisplay();





