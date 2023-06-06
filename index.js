// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'what is the title of the project: ',
  },
  {
    type: 'input',
    name: 'description',
    message: 'write a description of the project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information:',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter the contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please enter the test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application from the following list:',
    choices: ['MIT', 'Apache', 'GNU', 'None'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Please enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} generated successfully!`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate the markdown content for the README file
      const fileContent = generateMarkdown(answers);

      // Write the content to README.md
      writeToFile('README.md', fileContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
