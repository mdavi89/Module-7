// TODO: Include packages needed for this application
// Imported inquirer for the prompts in console, fs to write the README, and generateMarkdown to put the inputs taken in markdown language for the README
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from './utils/generateMarkdown.js'

// TODO: Create a function to write README file
//using fs write file functionality to take the data and write it to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
// The init function uses inquirer to take in inputs from the command line 
// Then calls the writeToFile to create the README
function init() {
inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project have?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'IPL'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    ])
    .then((data) => {
    const markdownContent = generateMarkdown(data);
    writeToFile('README.md',markdownContent);
    });
};
// Function call to initialize app
init();
