// TODO: Include packages needed for this application
// add and require inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');
const license = require('./utils/generateMarkdown')




// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your project title: ",
        name: "title",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    await inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
        })
    


}

// Function call to initialize app
init();
