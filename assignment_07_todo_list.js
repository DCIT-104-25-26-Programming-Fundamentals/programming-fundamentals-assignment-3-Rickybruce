// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 7
// =============================================================================
//
// TASK: Console-Based To-Do List Application
//
// Build a simple to-do list program that runs entirely in the console and
// allows the user to manage their tasks interactively using a menu.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_07_todo_list.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Task
//      - Prompt the user to type a task description.
//      - Add it to the array and confirm it was added.
//
//   2. View All Tasks
//      - Display all tasks currently in the array, numbered from 1.
//      - If the array is empty, print a friendly message saying so.
//
//   3. Delete a Task
//      - Show the list of tasks with their numbers.
//      - Ask the user which task number they want to remove.
//      - Remove the task and confirm the deletion.
//      - If the task number is invalid, print an error message.
//
//   4. Quit
//      - End the program with a farewell message.
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        TO-DO LIST MENU
//   ============================
//   1. Add task
//   2. View tasks
//   3. Delete task
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Enter task: Buy groceries
//   Task added: "Buy groceries"
//
//   Enter your choice (1-4): 2
//   Your Tasks:
//   1. Buy groceries
//   2. Study for exams
//
//   Enter your choice (1-4): 3
//   Enter task number to delete: 1
//   Task "Buy groceries" has been removed.
//
//   Enter your choice (1-4): 4
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store tasks in a JavaScript array (e.g. let tasks = []).
// - Use a loop to keep the menu running until the user chooses to quit.
// - Each feature MUST be implemented in its own function (see scaffold below).
// - Handle invalid menu choices gracefully (print an error, do not crash).
// - To remove an item from an array by index, use: tasks.splice(index, 1)
//
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

function addTask(todos){
    let newTodo = readline.question("Enter task: ");
    todos.push(newTodo);
    return console.log(`Task added: \"${newTodo}\"`);
}
function viewTask(todos){
    if (todos.length === 0) {
        console.log("No tasks found.");
        return;
    }

    for (let i = 0; i < todos.length; i++) {
        console.log(`${i + 1}. ${todos[i]}`);
    }
}
function deleteTask(todos){
    if (todos.length === 0) {
        console.log("No tasks to delete.");
        return;
    }

    viewTask(todos);
    const delIndex = readline.questionInt("Enter task number to delete: ") - 1;
    if (delIndex < 0 || delIndex >= todos.length) {
        console.log("Error: Todo not found");
        return;
    }

    const removedTask = todos.splice(delIndex, 1)[0];
    todos.filter((todo)=> todo != removedTask)
    console.log(`Task "${removedTask}" has been removed`);
}
const readline = require("readline-sync")
function main(){
    console.log(`
    ============================
        TO-DO LIST MENU
    ============================
    1. Add task
    2. View tasks
    3. Delete task
    4. Quit
        `)

    let todos = [];
    let input = readline.questionInt("Enter your choice (1-4): ");

    while (true) {
        if (input < 1 || input > 4) {
            console.log("Error: Invalid input");
            input = readline.questionInt("Enter your choice (1-4): ");
            continue;
        }
        if (input === 4) {
            console.log("Goodbye");
            break;
        }
        if (input === 1) {
            addTask(todos);
        } else if (input === 2) {
            viewTask(todos);
        } else if (input === 3) {
            deleteTask(todos);
        }
        input = readline.questionInt("Enter your choice (1-4): ");
    }
}

main();