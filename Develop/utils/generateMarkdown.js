// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
//  var test = `https://img.shields.io/badge/license-${license.license}-${license.color}`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var test = `![license](https://img.shields.io/badge/license-${data.license}-${data.color})`;
  return `${test}\n
# ${data.title}\n
## Description\n 
---\n
${data.description}\n
## Table of Contents\n
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Test](#tests)\n
## Installation\n
---\n
${data.instructions}\n
## Usage\n
---\n
${data.usage}\n
## Credits\n
---\n
${data.contribution}\n
## Tests\n
---\n
${data.test}`
}

module.exports = generateMarkdown;
