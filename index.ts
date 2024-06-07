#! /usr/bin/env node

// This line is called a shabang, it tells the OS to run it with nodejs

// Import the 'inquirer' module, whic is a command line interface for Node.js
import inquirer from "inquirer"

import chalk from "chalk"
// Declare a constant 'answers' and assign it tothe result of inquirer.prompt function

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.blueBright ("Enter your sentence to count the word:")
    
    }
])

const words = answers.Sentence.trim().split(" ")

// Print the array of words to the console
console.log(words)

// Print the word count of the sentence to the console
console.log (chalk.cyanBright(`Your sentence word count is) ${chalk.blueBright (words.length)}`));
