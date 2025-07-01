let firstName = "sneha";
console.log(firstName);

// npm install chalk 
// const chalk = require("chalk");
// console.log(chalk.blue("Hello world"));

import chalk from 'chalk';
console.log(chalk.blue("Hello world"));
console.log(chalk.red.bold("This is an error message"));
console.log(chalk.green.underline("This is a success message"));

// Internal packages = fs , path , http 
// const os = require("os");       // to get info about the system
// const path = require("path");   // to get file path info
import os from "os";
import path from "path";


// console.log("📁 Folder:", __dirname);
// console.log("📄 File Name:", path.basename(__filename));
console.log("👤 Username:", os.userInfo().username);
console.log("🏠 Home Directory:", os.homedir());
console.log("🧠 Free Memory (MB):", os.freemem() / 1024 / 1024);

// External packages = These are package written and maintained by other people. for
//example -> chalk , express .
