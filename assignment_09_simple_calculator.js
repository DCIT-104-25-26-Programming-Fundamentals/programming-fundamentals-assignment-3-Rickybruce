// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
function addition(a,b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}
function mod(a,b){
    return a % b;
}
function exponentiation(a,b){
    return a**b;
}
function main(){
    const readline = require("readline-sync");
    console.log(`
   ============================
       SIMPLE CALCULATOR
   ============================
   1. Addition
   2. Subtraction
   3. Multiplication
   4. Division
   5. Modulus
   6. Exponentiation
   7. Quit
        `)
    
    
    while (true){
        const choice = readline.questionInt("Select an operation (1-7): ");
        if(choice < 1 || choice > 7){
            console.warn("Error: Number must be from 1-7")
        }
        if( choice === 7){
            console.log("Goodbye")
            break;
        }
        const firstNum = readline.questionFloat("Enter first number : ");
        const secondNum = readline.questionFloat("Enter second number : ");
        if(choice ===1 ){
            console.log(`Result: ${firstNum}+${secondNum} = ${addition(firstNum,secondNum)} `)
        }else if(choice === 2){
            console.log(`Result: ${firstNum}-${secondNum} = ${subtraction(firstNum,secondNum)} `)
        }else if( choice === 3){
            console.log(`Result: ${firstNum}*${secondNum} = ${multiplication(firstNum,secondNum)} `)
        }else if( choice ===4 ){
            if( secondNum ===0){
                console.log("Error: Cannot divide by zero.")
            }else{
                result = division(firstNum,secondNum)
                console.log(`Result: ${firstNum}/${secondNum} = ${result.toFixed(2)} `)
            }
        }else if(choice === 5){
            console.log(`Result: ${firstNum}%${secondNum} = ${mod(firstNum,secondNum)} `)
        }else if(choice === 6){
            console.log(`Result: ${firstNum}**${secondNum} = ${exponentiation(firstNum,secondNum)} `)
        }
}
}
main();
