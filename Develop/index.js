// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// generateREADME const
const generateREADME = ({title, description, installation, usage, credits, license, features, contribution, tests}) => 
`# ${title}

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${license}

## Features

${features}

## How to Contribute

${contribution}

## Tests

${tests}`;

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
        name: 'usage',
        message: 'Provide instructions and examples for use.',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators, third-party assets, or tutorials used here.',
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
        name: 'features',
        message: 'If your project has a lot of features, list them here.',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Include guidelines indicating how other developers can contribute to your project here, if applicable',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'If you ran tests on your project, provide the examples on how to run them here.',
      }
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


