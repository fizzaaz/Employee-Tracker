//========================================================//
//==================== DEPENDENCIES=======================//
//========================================================//
const connection = require("./config/connection") 
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer=require("inquirer");
const { listenerCount } = require("events");


//========================================================//
//================== CONNECTING TO DB ====================//
//========================================================//
connection.connect((error) => {
    if (error) throw error;
    header();   
  });

//========================================================//
//======================= HEADER =========================//
//========================================================//
const header=()=>
{
    console.log(``);
    console.log(chalk.magenta.bold(`====================================================================================`));
    console.log(chalk.yellowBright.bold(`************************************************************************************`));
   
    console.log(chalk.magenta.bold(`====================================================================================`));

    console.log(``);
    console.log(chalk.yellowBright.bold(figlet.textSync('Employee Tracker')));
    console.log(``);
    console.log(`                                                            ` + chalk.magenta.bold('Created By: Fizza Zaidi'));
    console.log(``);
    console.log(chalk.magenta.bold(`====================================================================================`));
    console.log(chalk.yellowBright.bold(`************************************************************************************`));
    console.log(chalk.magenta.bold(`====================================================================================`));
}
 
//========================================================//
//==================== PROMPT USER =======================//
//========================================================//
const promptUser=()=>
{
 inquirer.prompt(
     {
         type:"list",
         name:"questions",
         message:

     })   
}