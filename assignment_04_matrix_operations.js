// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readline = require("readline-sync");

function readMatrix(rows, cols, label) {
    const matrix = [];
    for (let r = 1; r <= rows; r++) {
        const rowInput = readline.question(`Enter row ${r} of ${label}: `);
        const row = rowInput.split(" ").map(Number);
        if (row.length !== cols || row.some(value => Number.isNaN(value))) {
            console.log("Error: Please enter the correct number of numeric values.");
            r--;
            continue;
        }
        matrix.push(row);
    }
    return matrix;
}

function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    for (let c = 0; c < cols; c++) {
        const newRow = [];
        for (let r = 0; r < rows; r++) {
            newRow.push(matrix[r][c]);
        }
        result.push(newRow);
    }
    return result;
}

function addMatrices(A, B) {
    const rows = A.length;
    const cols = A[0].length;
    const result = [];

    for (let r = 0; r < rows; r++) {
        const row = [];
        for (let c = 0; c < cols; c++) {
            row.push(A[r][c] + B[r][c]);
        }
        result.push(row);
    }
    return result;
}

function multiplyMatrices(A, B) {
    const rowsA = A.length;
    const colsA = A[0].length;
    const colsB = B[0].length;
    const result = [];

    for (let r = 0; r < rowsA; r++) {
        const row = [];
        for (let c = 0; c < colsB; c++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += A[r][k] * B[k][c];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}

function printMatrix(matrix) {
    for (let r = 0; r < matrix.length; r++) {
        console.log(matrix[r].join(" "));
    }
}

function main() {
    console.log("Matrix Transpose, Addition, and Multiplication\n");

    const rowsA = readline.questionInt("Enter number of rows for matrix A: ");
    const colsA = readline.questionInt("Enter number of columns for matrix A: ");
    const matrixA = readMatrix(rowsA, colsA, "A");

    console.log("\nTranspose of matrix A:");
    printMatrix(transpose(matrixA));

    const rowsB = rowsA;
    const colsB = colsA;
    console.log("\nEnter matrix B for addition (same dimensions as A):");
    const matrixB = readMatrix(rowsB, colsB, "B");

    console.log("\nA + B:");
    printMatrix(addMatrices(matrixA, matrixB));

    const rowsC = colsA;
    const colsC = readline.questionInt("\nEnter number of columns for matrix B in multiplication: ");
    console.log("Enter matrix B for multiplication:");
    const matrixC = readMatrix(rowsC, colsC, "B");

    console.log("\nA x B:");
    printMatrix(multiplyMatrices(matrixA, matrixC));
}

main();

