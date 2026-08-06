// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
function Sum(nums){
    let total = 0;
    let j = nums.length;
    for (let i=0; i< j ;i++){
        total += nums[i];
    }
    return total;
}
function Average(nums){
    let mean = Sum(nums)/nums.length;
    return mean.toFixed(2);
}
function Maximun(nums){
    let maximumNum = nums[0];
    for(let i =1 ;i < nums.length ;i++ ){
        if (nums[i]>maximumNum){
            maximumNum =nums[i];
        }
    }
    return maximumNum;
}
function Minimum(nums){
    let smallestNum = nums[0];
    for(let i =1 ;i < nums.length ;i++ ){
        if (nums[i]<smallestNum){
            smallestNum =nums[i];
        }
    }
    return smallestNum;
}
function main (){
    const readline = require("readline-sync");
    const n = readline.questionInt("How many numbers? ");
    if (n <= 0) {
    console.log("Error: Number of items must be positive.");
    return;
    }

    let nums = [];
    for (let i = 1; i <= n ; i++){
        let num = readline.questionFloat(`Enter number ${i}: `);
        nums.push(num);
    }

    console.log("Result");
    console.log(`Sum:         ${Sum(nums)}`);
    console.log(`Average:     ${Average(nums)}`);
    console.log(`Maximun:     ${Maximun(nums)}`)
    console.log(`Minimum:     ${Minimum(nums)}`)
}
main();