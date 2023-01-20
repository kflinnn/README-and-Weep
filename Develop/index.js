// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// generateREADME const
const generateREADME = ({title, description, installation, usage, contribution, tests, license, questions, github, email}) => 
`# ${title}

## Description

${description}

## Table of Contents

-[Installation](#installation)
-[Usage](#usage)
-[Contribution](#contribution)
-[Tests](#tests)
-[License](#license)
-[Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contribution

${contribution}

## Tests

${tests}

## License

${license}

## Questions

${questions}

GitHub: ${github}

Email: ${email};`

//inquirer prompts
inquirer
    .prompt([
       { type: 'input',
        name: 'title',
        message: 'What is the title of your README?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide a step-by-step description of how to get the development environment running.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'If you ran tests on your project, provide the examples on how to run them here.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Include guidelines indicating how other developers can contribute to your project here, if applicable',
      },
      {
        type: 'list',
        name: 'license',
        choices: [
            "MIT License",
            "GNU General Public License v3.0",
            "GNU Lesser General Public License v3.0",
            "GNU Affero General Public License v2.0",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "Boost Software License 1.0",
            "Eclipse Public License 2.0",
            "The Unlicense",
            ],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please provide your email address',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Provide instructions on how to be contacted through GitHub and email.',
      },
    ])
    .then((answers) => {
        const readMeContent = generateREADME(answers);

        fs.writeFile('readme.md', readMeContent, (err) => 
        err ? console.log(err) : console.log ('Successfully created README.md!')
        );
    });

// TODO: Create a function to initialize app
function init() {generateREADME};


// Function call to initialize app
init();


