var renLicenseBadge = '';
var licenseLink = '';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
if (data.license === 'none') {
  renLicense = '';
  return;
} else {
  let genLicense = `![license](https://img.shields.io/badge/license-${data.license}-${data.color})`;
  renLicenseBadge = genLicense;
  renderLicenseLink(data);
  ;
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    let genLicenseLink = `[${data.license}](https://opensource.org/licenses/${data.license})`;
    licenseLink = genLicenseLink;
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data);
  return `${renLicenseBadge}\n
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
${data.test}\n
## License\n
This application is licensed under ${licenseLink}\n
## Questions?\n
Here are ways to reach out to me...\n
[GitHub](https://github.com/${data.username})\n
${data.email}`
}

module.exports = generateMarkdown;
