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

import fs from 'fs';
import path from 'path';
import { Command } from 'commander';


const program = new Command();

program
  .name('word-counter')
  .description('CLI to count words in a file')
  .version('1.0.0');

program
  .command('count')
  .description('Count words in the given file')
  .argument('<filePath>', 'Path to your file')
  .action((filePath) => {
    const absolutePath = path.resolve(filePath);
    fs.readFile(absolutePath, 'utf8', (err, data) => {
      if (err) {
        console.error('❌ Error reading file:', err.message);
        return;
      }

      const wordCount = data.trim().split(/\s+/).length;
      console.log(`✅ You have ${wordCount} words in this file.`);
    });
  });

program.parse();

// use this command to run : node CLI.js count a.txt
// Output : ✅ You have 9 words in this file.


