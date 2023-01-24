# README-and-Weep

## Purpose

A command-line application that accepts user input to generate a README.

When the user is prompted for information about their application repository, then a high-quality and professional README.md is generated containing the title of the project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions. When the user enters their project title, it is displayed as the title of the README. When they enter a description, installation instructions, usage information, contribution guidelines, and test instructions, then these are all added to the corresponding sections of the README. After choosing a license from a list of options, a badge for the license is added near the top of the README and a notice is added to the License section explaining the chosen license for the application. The user then enters their GitHub username and email address to be included in the Questions section along with instructions on how to reach the user. When the user clicks on the links in the Table of Contents they are taken to the specified section. This was achieved by using node.js and the npm Inquirer. 

## Examples

Code for Inquirer Prompts:

![Screen Shot 2023-01-24 at 5 56 57 PM](https://user-images.githubusercontent.com/116764540/214439712-a1c16341-e674-402e-8d7e-672f9b6ca0b0.png)


User Prompts in Terminal and Success of Generation:

![Screen Shot 2023-01-24 at 6 02 10 PM](https://user-images.githubusercontent.com/116764540/214440415-a92d77bc-dc7c-48f5-9736-0200a6783d2f.png)



Function to Generate Markdown:

![Screen Shot 2023-01-24 at 5 58 18 PM](https://user-images.githubusercontent.com/116764540/214439859-028e88a8-d518-4b2f-b37b-e46d5df12e30.png)


Generated README:

![Screen Shot 2023-01-24 at 6 03 56 PM](https://user-images.githubusercontent.com/116764540/214440650-ccef1f1c-0cd1-404b-9f5b-7fee5896fe99.png)


## License

MIT License

Copyright (c) 2022 Kelley Flinn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Technologies Used

Language: JavaScript

NPM: Inquirer

