// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Provide a short description of your project?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'instructions',
      },
      {
        type: 'input',
        message: 'Insert screenshots and/or demonstrations here',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What are your contribution guidelines?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'What are your test instructions',
        name: 'test',
      },
      {
        type: 'list',
        message: 'Select an open source license',
        choices: ['MIT', 'Apache', 'lgpl_2_1', 'MIT + file LICENSE', 'MIT/Apache-2.0', 'GPL', 'none'],
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
        message: 'Github username',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
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
