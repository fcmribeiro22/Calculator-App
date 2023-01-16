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
            return firstOperand;
    }

}


const display = document.querySelector('.display');
const button = document.querySelectorAll('.button');
const equalButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear-button');
const operatorButtons= document.querySelectorAll('.operator');
const dotButton= document.querySelector('.dot-button');
const backButton= document.querySelector('.back-button')

display.textContent="0";
let displayValue= "";
let firstOperand = "0";
let secondOperand ="";
let operator= "";
let result="";


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
            if(firstOperand && secondOperand && operator){
                result = operate(operator, Number(firstOperand), Number(secondOperand));
                display.textContent = result;
                firstOperand= result;
                secondOperand= "";
                displayValue= "";

            } else{
                operator = this.value;
            }
            

        } );
    }
    
}



function displayAfterclick(){
    if(display.textContent.length < 35){
        
        if (operator === ""){
            if (display.innerHTML === "0") {
                display.innerHTML = "";
            } 
            display.innerHTML += this.value;
            firstOperand = display.innerHTML;
        } else {
            if (display.innerHTML === "0") {
                firstOperand= "0";
            } 
            display.textContent ="";
            display.innerHTML= displayValue;
            displayValue +=this.value;
            display.textContent=displayValue;
            secondOperand= displayValue;
    
          
        }
    } else{
        if(operator !== ""){
            if(displayValue < 35){
                
                display.textContent ="";
                display.innerHTML= displayValue;
                displayValue +=this.value;
                display.textContent=displayValue;
                secondOperand= displayValue;
            }
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
     result = operate(operator, Number(firstOperand), Number(secondOperand));
    display.textContent = result;
    firstOperand= result;
    secondOperand= "";
    operator= "";
    displayValue= "";

    console.log(result);
    console.log(firstOperand);
    console.log(secondOperand);
});

dotButton.addEventListener('click', function(){
    
    if(displayValue !== ""){
        if(displayValue.indexOf(".")===-1){
            let restartValue= ".";
            this.value= restartValue;
            display.textContent += this.value;
            displayValue += this.value;
        } else{
            this.value="";
        }

    } else{
        if(display.textContent.indexOf(".")===-1){
            let restartValue= ".";
            this.value= restartValue;
            display.textContent += this.value;
        }else{
            this.value ="";
        }

    }

})

backButton.addEventListener('click', function(){
    let croppedDis= display.textContent.substring(0,display.textContent.length-1 );
    display.textContent= croppedDis;
    if(operator === ""){
        firstOperand= croppedDis;
    } else{
        secondOperand= croppedDis;
    }

})




setOperator();
toDisplay();



