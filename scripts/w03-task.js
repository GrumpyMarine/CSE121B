/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}
function addNumbers() {
    let add1 = Number(document.querySelector('#add1').value);
    let add2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(add1, add2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function(subtract1, subtract2) {
    return subtract1 - subtract2;
}
function subtractNumbers() {   
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply =  (number1, number2) => number1 * number2;

const multiplyNumbers = () => {   
    let factorNumber1 = Number(document.querySelector('#factor1').value);
    let factorNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factorNumber1, factorNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);



/* Open Function Use - Divide Numbers */
function divide (number1, number2) {
    return number1 / number2;
}
function divideNumbers() {   
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);



/* Decision Structure */
let today = new Date();
let currentYear = "";
currentYear = today.getFullYear();
document.getElementById("year").textContent=currentYear



/* ARRAY METHODS - Functional Programming */



/* Output Source Array */
const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").textContent=numbersArray


/* Output Odds Only Array */
const odds = numbersArray.filter((num) => num % 2 ===1);
document.getElementById("odds").textContent=odds


/* Output Evens Only Array */
const evens = numbersArray.filter((num) => num % 2 ===0);
document.getElementById("evens").textContent=evens



/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.querySelector("#sumOfArray").textContent=sumOfArray



/* Output Multiplied by 2 Array */
const sumOfMultiplied = numbersArray.map(number => number *2);
document.querySelector("#multiplied").textContent=sumOfMultiplied


/* Output Sum of Multiplied by 2 Array */
const sumOfArrayMultiplied = sumOfMultiplied.reduce((sum, number) => sum + number);

document.querySelector("#sumOfMultiplied").textContent=sumOfArrayMultiplied

