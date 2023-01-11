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

function operation(operation,operand1,operand2){
    return operation(operand1,operand2);
};

console.log(operation(multiply,10,2));