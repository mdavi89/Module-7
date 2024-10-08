// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Returns the correct badge based on the selected license
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Generates a License link if a license is selected
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `- [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Adds a license section if a license is selected
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License
This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
// Inserted variables and functions from the inputs to create the md language for the README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}
  
  ## Questions
  Please submit questions at the following links
  Email: [${data.email}](mailto:${data.email}).
  Github: [${data.username}](https://github.com/${data.username}).
`;
}
export default generateMarkdown;

