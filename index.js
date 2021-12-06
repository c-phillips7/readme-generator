// TODO: Include packages needed for this application
// add and require inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown')




// TODO: Create an array of questions for user input
// username, description, installation, usage, license, credits
const questions = [
    {
        type: "input",
        message: "Enter your Github username: ",
        name: "username",
    },
    {
        type: "input",
        message: "Enter your project title: ",
        name: "title",
    },
    {
        type: "input",
        message: "Enter a short project description: ",
        name: "description",
    },
    {
        type: "input",
        message: "Enter installation instructions: ",
        name: "installation",
    },
    {
        type: "input",
        message: "Enter the usage of project: ",
        name: "usage",
    },
    {
        type: "input",
        message: "Enter licenses used for your project: ",
        name: "licenses",
    },
    {
        type: "input",
        message: "Enter any credits for project: ",
        name: "credit",
    },
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    writeFileAsync(fileName, data)
    .then(function() {
        console.log("ReadMe generated");
    }).catch(err => {
        console.log("Error: ", err);
    });
};


// TODO: Create a function to initialize app
async function init() {
    await inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);

            // Set answers to data for writeToFile

            // call to writeToFile()
        })
    


}

// Function call to initialize app
init();
