const connection = require("./config/connection")
const chalk = require('chalk');
const figlet = require('figlet');


//========== Connection ID ==========================//
// Database Connect and Starter Title
connection.connect((error) => {
    if (error) throw error;
    console.log(chalk.yellow.bold(`====================================================================================`));
    console.log(``);
    console.log(chalk.greenBright.bold(figlet.textSync('Employee Tracker')));
    console.log(``);
    console.log(`                                                          ` + chalk.greenBright.bold('Created By: Joseph DeWoody'));
    console.log(``);
    console.log(chalk.yellow.bold(`====================================================================================`));
  });