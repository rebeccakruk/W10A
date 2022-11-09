// Take nothing, return nothing
function greetUser(){
console.log(`Greetings, please choose one of the following:`);
console.log(`1. Add 2 numbers`);
console.log(`2. Divide 2 numbers`);
}

// Take an arguement, return nothing
function greetSpecificUser(username){
    console.log(`Hello, ${username}. How was your day?`);
}

// calling the function

// Take nothing, return a number
function getWinningNumber(){
    let winner = 110;
    return winner;
}

// Take 2 arguments (expected to be numbers), return the sum
function getSum(num1, num2){
    let result = num1 + num2;
    return result;
}

let username = `Mark`;
greetSpecificUser(`Mrs. Balls`);
console.log(username);
greetSpecificUser(`Bartholomew`);

// pay attention to the scope of the function

// calling the function
let winningNumber = getWinningNumber();
console.log(winningNumber);

console.log(getSum(1,2));
console.log(getSum(101,200));
console.log(getSum(0,-5));

// this is short hand that says 'take whatever the result was and give it to log


// Take an array, return an array of the lats three elements of the original array

//This is the style that you follow in general for function documentation. You give the function what it does one line before the declaration.
function getLast3(myArr3){
    let one = myArr3.pop();
    let two = myArr3.pop();
    let three = myArr3.pop();
    let result = [one, two, three];
    return result;

    let truncatedArray = getLast3((4,6,10,-4,23,0))
    console.log(truncatedArray);
}

function minimum(numberOne, numberTwo){
    if (numberOne <= numberTwo){
        return numberOne;
    }
}

