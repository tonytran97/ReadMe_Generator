// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your application/project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Provide a short description of your application/project',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'instructions',
      },
      {
        type: 'input',
        message: 'Provide instructions about the usage of the application/project',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What are your guidelines if any other developers would like to contribute',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Provide the tests of your application/project if you had any',
        name: 'test',
      },
      {
        type: 'list',
        message: 'Select an open source license',
        choices: ['MIT', 'Apache-2.0', 'BSD-3-Clause', 'GPL-3.0', 'none'],
        name: 'license',
      },
      {
        type: 'list',
        message: 'Select a color for your license badge',
        choices: ['brightgreen', 'green', 'yellowgreen', 'yellow', 'orange', 'red', 'blue', 'lightgrey', 'blueviolet', 'ff69b4', '9cf'],
        name: 'color',
      },
      {
        type: 'input',
        message: 'Provide your GitHub username for contact purposes',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Provide your email for contact purposes',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Feel free to list out anyone who helped out with this application/project',
        name: 'credit',
      },
      {
        type: 'list',
        message: 'This README generator only serves the purpose of providing a basic outline of the file. Make sure to review the file and make changes as needed.',
        choices: ['I will make sure to do that'],
        name: 'end',
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
       err ? console.error(err) : console.log('README file created')
     );}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
    writeToFile('./README.md', genMarkdown(response)))
}

// Function call to initialize app
init();