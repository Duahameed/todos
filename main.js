import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in todos?",
        },
        {
            name: "addmore",
            type: "confirm",
            message: "what do you want to add ?",
            default: "false",
        }
    ]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}
