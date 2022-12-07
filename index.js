// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username.',
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address.'
},
{
    type: 'input',
    name: 'title',
    message: 'Enter the project name: ',
},
{
    type: 'input',
    name: 'description',
    message: 'Enter a brief description of this project.',
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license.',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
},
{
    type: 'input',
    name: 'installation',
    message: 'How would one go about installing the required files?',
    default: 'npm i'
},
{
    type: 'input',
    name: 'tests',
    message: 'What commands should be run for testing?',
    default: 'npm test'
},
{
    type: 'input',
    name: 'usage',
    message: 'Type out a brief description on how the user would go about using this application',
},
{
    type: 'input',
    name: 'contribution',
    message: 'Type what the user would need to know about contributing to your repo.',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Making Professional README...');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    });
}

// Function call to initialize app
init();
