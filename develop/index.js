// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require("fs")
const generateMarkDown = require('./utils/generateMarkdown')

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
        choices: ['gnu gpl v3', 'apache license 2.0', 'mozilla public license 2.0', 'mit', 'none'],
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
        name: 'userinfo',
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
        name: 'contributing',
        message: 'What does the user need to know about contributing to this repo? (Required)',
        validate: contributingInput => {
          if (contributingInput) {
            return true;
          } else {
            console.log('Please enter contribution information about using this repo?');
            return false;
          }
        }
    },
]
  
// TODO: Create a function to write README file

function init() {
    return inquirer.prompt(questions)
        .then(answers => {
          const mark = generateMarkDown(answers)
            fs.writeFile('README.md', mark, function (err) {
              if(err) {
                console.log('Could not generate ReadME')
              } else {
                console.log('Sucess: ReadME created')
              }
            })
        })
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app

init()
