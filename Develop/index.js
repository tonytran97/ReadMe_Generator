// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, () => {
      console.log('success');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
    writeToFile('./README.md', JSON.stringify(response.title)));
    
}

// Function call to initialize app
init();
