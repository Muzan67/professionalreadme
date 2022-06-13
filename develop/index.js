// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter GitHub username?');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address?');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'project',
        message: 'What is your projects name? (Required)',
        validate: projectInput => {
          if (projectInput) {
            return true;
          } else {
            console.log('Please enter your projects name?');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'licenses',
        message: 'What kind of liceses should your project have? (Choose your license)',
        choices: ['GNU', 'Apache License 2.0', 'Berkeley Software Distributions', 'MIT']
      },
      {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies (Required)',
        validate: dependenciesInput => {
          if (dependenciesInput) {
            return true;
          } else {
            console.log('You need to enter a installation dependecy!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'command',
        message: 'what command should be run to run the tests? (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please enter your command to run the tests?');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'project',
        message: 'What does the user need to know about using this repo? (Required)',
        validate: repoInput => {
          if (repoInput) {
            return true;
          } else {
            console.log('Please enter user information about using this repo?');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'project',
        message: 'What does the user need to know about contributing to this repo? (Required)',
        validate: contributionInput => {
          if (conrtibutionInput) {
            return true;
          } else {
            console.log('Please enter contribution information about using this repo?');
            return false;
          }
        }
    },
]
  
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then(answers) => {
            console.log(answers)
            return answers 
        }
        .catch(error) => {
            console.log(error)
        }
}

// Function call to initialize app
functioninit();