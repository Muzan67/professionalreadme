const fs = require('fs');
const inquirer = require('inquirer');
const index =require('../index.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  let badge = '';
  if (license === 'gnugplvs3') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)])'
  } else if (license === 'apache') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)])'
  } else if (license === 'mozilla') { 
    badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
  } else if (license === 'mit') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else {
    badge = ""
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = '';
    if (license === 'gnugplvs3') {
       licenseLink = 'https://www.gnu.org/licenses'
      } else if (license === 'apache') {  
        licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
      }  else if (license === 'mozilla') { 
        licenseLink ='https://opensource.org/licenses/MPL-2.0'
      } else if (license === 'mit') {
        licenseLink = 'https://choosealicense.com/licenses/mit/'
    } else {
      licenseLink = ""
    }
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection= ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license} `
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

return `
# ${answers.project}

## ${renderLicenseSection(answers.licenses)} ${renderLicenseBadge(answers.licenses)}
### ${renderLicenseLink(answers.licenses)}

## Table of Contents

- [Github Account](#GithubAccount)
- [User Email](#UserEmail)
- [Project Name](#ProjectName)
- [Description](#Description)
- [License](#License)
- [Dependencies](#Dependencies)
- [Command](#Command)
- [Installation](#Installation)
- [Contributing](#Contributing)
   
## Github Account
${answers.github}

## User email
${answers.email}
        
## Project Name
${answers.project}

## Description
${answers.description}

## License
${answers.licenses}

## Dependencies
${answers.dependencies}

## Command
${answers.command}

## User-Info
${answers.userinfo}

## Contributing
${answers.contributing}

## Questions
[If you have any questions about the repo, open an issue or contact me directly at ac.tendo67@gmail.com You can find more of my work at https://github.com/Muzan67
`;
}

// exports
module.exports = generateMarkdown