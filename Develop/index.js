// Include packages required for this app
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Function to initialize the app
async function init() {
  try {
    // Prompt user for input
    const userInput = await inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "Enter the project title:",
      },
      {
        type: "input",
        name: "description",
        message: "Enter a project description:",
      },
      {
        type: "input",
        name: "usage",
        message: "Enter the key features of the application/project:",
      },
      {
        type: "input",
        name: "installation",
        message: "Enter installation steps:",
      },
      {
        type: "list",
        name: "license",
        message: "Choose a license:",
        choices: ["MIT", "Apache", "GPL", "Other", "None"],
      },
      {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidelines:",
      },
      {
        type: "input",
        name: "tests",
        message: "Enter test instructions:",
      },
      {
        type: "input",
        name: "collaborators",
        message: "Enter names of collaborators on the project:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:",
      },
      {
        type: "input",
        name: "questions",
        message: "Enter your email address:",
        validate: function (input) {
          // Use a regular expression to validate input as an email address
          const emailRegex = /\S+@\S+\.\S+/;
          if (emailRegex.test(input)) {
            return true;
          } else {
            return "Please enter a valid email address.";
          }
        },
      },
    ]);

    // Generate README content
    const filename = "README.md";
    const content = generateMarkdown(userInput);

    // Write README file
    fs.writeFile(filename, content, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`${filename} successfully generated!`);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

// Function call to initialize app
init();
