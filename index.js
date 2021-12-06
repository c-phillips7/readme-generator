// TODO: Include packages needed for this application
// add and require inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown')
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


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
        type: "list",
        message: "Choose a license for your project: ",
        name: "license",
        choices: ["Apache", "GNU", "MIT"]
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
            console.log(data);

            return data
        })
        .then(data => {
            // Logic to display license badges instead of just name
            
            // Checking if data variable is readable
            // console.log(data);
            // console.log(data.license);

            if (data.license === "Apache") {
                data.license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        
            }
            else if (data.license === "GPL") {
                data.license = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
            }
            else if (data.license === "MIT") {
                data.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            }
           else {console.log("If statement failed, no license matched");}

            // call to writeToFile()
            const finalReadMe = markdown(data)
            writeToFile("output/README.md", finalReadMe); 
        })
        .catch(err => {
            console.log("Error: ", err);
        });
};

// Function call to initialize app
init();
