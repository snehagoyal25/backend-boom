 // Assignment - 1 
 // Create a command line interface that lets a user specify a file path and the nodejs process counts the numbers of words inside it .

// const fs =require ("fs");
// const path = require("path");
// // npm install commander
// const {command} = require("commander");

// // This is like starting your app and telling Node:
// //“Hey! I’m going to build a CLI now.”

// const program = new Command();

// // Adding info about your app:
// program
// .name('word-counter')
// .description('CLI to count words')
// .version('1.0.0')

// program
// .command('count')
// .argument(a.txt)




// const fs = require('fs');
// const path = require('path');
// const { Command } = require('commander');


// Importing modules 
// fs 👉 to read the file
// path 👉 to convert a relative file path to an absolute one
// commander 👉 to make CLI commands easy to write and use
import fs from 'fs';
import path from 'path';
import { Command } from 'commander';
//Create CLI App
const program = new Command();
//App Info 
// You're telling Commander:
// The name of your CLI tool is word-counter
// What it does (help message)
// The version of your app
program
  .name('word-counter')
  .description('CLI to count words in a file')
  .version('1.0.0');
//Define a count Command
program
  .command('count')
  .description('Count words in the given file')
  .argument('<filePath>', 'Path to your file')
  //What Happens When count Runs?
//Takes the user-given path (a.txt)
//Converts it into a full system path so Node can find it anywhere
//Example:
//If you're in Desktop/100, a.txt becomes C:/Users/Dell/Desktop/100/a.txt

  .action((filePath) => {
    const absolutePath = path.resolve(filePath);
    //Read the File
    fs.readFile(absolutePath, 'utf8', (err, data) => {
      if (err) {
        console.error('❌ Error reading file:', err.message);
        return;
      }
//Count the Words
// data.trim() – remove extra white spaces from start/end
// .split(/\s+/) – splits text on any kind of whitespace (space, tabs, newlines)
// .length – gives the total number of "words"
      const wordCount = data.trim().split(/\s+/).length;
      console.log(`✅ You have ${wordCount} words in this file.`);
    });
  });

  //This tells commander: "Now take input from the terminal and run commands."
program.parse();

// use this command to run : node CLI.js count a.txt
// Output : ✅ You have 9 words in this file.


