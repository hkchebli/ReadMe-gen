const inquirer = require('inquirer');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
    if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'GNU') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else {
    return '';
  }}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return '[MIT License](https://opensource.org/licenses/MIT)';
      } else if (license === 'Apache') {
        return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
      } else if (license === 'GNU') {
        return '[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)';
      } else {
        return '';
      }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License
    
    This application is covered under the ${license} license.
    
    ${renderLicenseBadge(license)}
    
    For more information about the license, please refer to the ${renderLicenseLink(license)}.`;
      } else {
        return '';
      }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    
    return `# ${data.projectTitle}

    ## Description
    ${data.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}
    
    ${renderLicenseSection(data.license)}
    
    ## Contributing
    ${data.contribution}
    
    ## Tests
    ${data.tests}
    
    ## Questions
    For additional questions, you can reach me via:
    - [GitHub](https://github.com/${data.githubUsername})
    - Email: ${data.email}`;
    }
    


module.exports = generateMarkdown;
