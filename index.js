// require inquirer
const inquirer = require('inquirer');
const fs = require('fs');

// function to create README
const generateReadMe = (answers) => {
    return `#Title 
    # ${answers.Title}

    ## Description 
     ${answers.Description}

    ## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [Questions](#questions)

    ## Installation 
    ${answers.Installation}
    
    ## Usage 
    ${answers.Usage}
    
    ## Contributing 
    ${answers.Contribution}

    ## Test 
    ${answers.Test}
    
    ## License 
    ${answers.License}
    `;
}

// user questions
inquirer.prompt([
    {
        type: "input",
        name: "Title",
        message: "What is the title of your application?",
    },

    {
        type: "input",
        name: "Description",
        message: "Please write a description of your application.",
    },

    {
        type: "input",
        name: "Installation",
        message: "Please explain how to install your application.",
    },

    {
        type: "input",
        name: "Usage",
        message: "Please explane how to use your application.",
    },

    {
        type: "input",
        name: "Contribution",
        message: "Please provide guidlines on how to contribute to your application.",
    },

    {
        type: "input",
        name: "Test",
        message: "Please explain how to test your application.",
    },

    {
        type: "list",
        name: "License",
        choices: ["MIT License", "GVL GPL License", "Appache License", "No License"],
    },
]).then((answers) => {
    console.log(answers);
    fs.writeFile("readme.md", generateReadMe(answers), (err) => { // function to pass user data to README
        if (err) {
            console.error(err);
        } else {
            console.log("Successfully wrote to README")
            console.log(answers);
        }
    });
}).catch(err => {
    console.log(err);
});


