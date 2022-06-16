class MarkDown {

    static generateLicenseBadge(license) {
        const badges = {
            gnugplv3:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            apache:'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            mozilla:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        }
        return badges[license]
    }

    static renderLicenseLink(license) {
         const licenseLinks = {
            gnugplv3:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            apache:'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            mozilla:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
         }
         return licenseLinks[license]
    }

    static renderLicenseSection(licenses) {
        if(license){
            return `Licensed under the ${this.renderLicenseBadge(licenses)} license`
        } else {
            return ''
        }
    }

// function to generate markdown for README.md

static generateReadMe(answers) {

    return `
# ${answers.title}

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
- [License](#License)
   
## Github Account
${answers.github}

## User email
${answers.email}
        
## Project Name
${answers.project}

## Description
${answers.description}

## License
${this.renderLicenseSection(answers.licenses)}

## Dependencies
${answers.dependencies}

## Command
${answers.command}

## User-Info
${answers.userinfo}

## Contributing
${answers.contributing}
    ` 
    }
}

// exports
module.exports = MarkDown