// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (!license) {
    return ``;
  }
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // switch(license){
  //   case "MIT License":
  //      return `[License Description](https://opensource.org/licenses/MIT)`
  //      case "",
  // }
  if (!license) {
    return "";
  }
  return `[License descriptions](https://opensource.org/licenses/${license})]`

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (!license) {
//     return "";
// renderLicenseBadge
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
${renderLicenseBadge(data.license)}

  ## Description

${data.description}

## Table of Contents

-[Installation](#installation)
<br />
-[Usage](#usage)
<br />
-[Contribution](#contribution)
<br />
-[Tests](#tests)
<br />
-[License](#license)
<br />
-[Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Tests

${data.tests}

## License

${data.license}
${renderLicenseLink(data.license)}

## Questions

${data.questions}

GitHub: https://github.com/${data.github}

Email: ${data.email};
`;
}

module.exports = generateMarkdown;
