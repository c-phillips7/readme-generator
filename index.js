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
        name: "license",
    },
    {
        type: "input",
        message: "List any contributers to this project: ",
        name: "contributing",
    },
    {
        type: "input",
        message: "Enter any tests you are running for your project: ",
        name: "tests",
    },
    {
        type: "input",
        message: "Enter your Github username: ",
        name: "username",
    },
    {
        type: "input",
        message: "Enter your email: ",
        name: "email",
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
            // console.log(answers);
            /*how answers are logged:
            {
                title: 'read me generator',
                description: 'a read me generator',
                installation: 'none',
                usage: 'to generate a professional readme',
                license: 'none',
                contributing: 'none',
                tests: 'none',
                username: 'c-phillips7',
                email: 'cp.phillips15@gmail.com'
              }
              */

            // Set answers to data for writeToFile
            const data = 
            {
                title: answers.title,
                description: answers.description,
                installation: answers.installation,
                usage: answers.usage,
                license: answers.license,
                contributing: answers.contributing,
                tests: answers.tests,
                username: answers.username,
                email: answers.email,
            }
            // console.log(data);


            // call to writeToFile()
            const finalReadMe = markdown(data)
            writeToFile(".output/README.md", finalReadMe); 
        })
        .catch(err => {
            console.log("Error: ", err);
        });
};

// Function call to initialize app
init();
