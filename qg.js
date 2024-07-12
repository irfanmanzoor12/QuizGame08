import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: "Q1. What is the correct way to check if two values are not eqaul in TypeScript?",
        choices: ["a==b", "a===b", "a=b", "a !== b"]
    },
    {
        name: "question2",
        type: "list",
        message: "Q2. Which of the following chararters is commonly allowed in variable name TypeScrip ?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question3",
        type: "list",
        message: "Q3. Which operator is used for string concatenation in TypeScrip ?",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question4",
        type: "list",
        message: "Q4.In Typescript, which symbol is used to eliminate the statement commonly?",
        choices: [".", ":", ";", ","]
    },
    {
        name: "question5",
        type: "list",
        message: "Q5. Which method of inquirer.js is used to start the prompt interface and receiver user input",
        choices: ["start()", "Prompt()", "init()", "run()"]
    }
]);
let score = 0;
switch (quiz.question1) {
    case "a !== b":
        console.log("1.Correct");
        ++score;
        break;
    default:
        console.log("1. Incorrect");
}
switch (quiz.question2) {
    case "$":
        console.log("2.Correct");
        ++score;
        break;
    default:
        console.log("2. Incorrect");
}
switch (quiz.question3) {
    case "+":
        console.log("3.Correct");
        ++score;
        break;
    default:
        console.log("3. Incorrect");
}
switch (quiz.question4) {
    case ";":
        console.log("4.Correct");
        ++score;
        break;
    default:
        console.log("4. Incorrect");
}
switch (quiz.question5) {
    case "Prompt()":
        console.log("5.Correct");
        ++score;
        break;
    default:
        console.log("5. Incorrect");
}
console.log(`Score: ${score}`);
