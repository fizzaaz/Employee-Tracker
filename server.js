//========================================================//
//==================== DEPENDENCIES=======================//
//========================================================//
const connection = require("./config/connection")
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require("inquirer");
const queries=require('queries.js')

//========================================================//
//================== CONNECTING TO DB ====================//
//========================================================//
connection.connect((error) => {
    if (error) throw error;
   app();
});

//========================================================//
//======================= HEADER =========================//
//========================================================//
const header = () => {
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
const promptUser = () => {
    inquirer.prompt(
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                "VIEW ALL EMPLOYEES",
                "VIEW ALL DEPARTMENTS",
                "VIEW ALL ROLES",
                "VIEW EMPLOYEES BY MANAGER",
                "VIEW EMPLOYEES BY DEPARTMENT",
                "ADD A DEPARTMENT",
                "ADD A ROLE",
                "ADD AN EMPLOYEE",
                "UPDATE AN EMPLOYEE'S ROLE",
                "UPDATE EMPLOYEE'S MANAGERS",
                "DELETE DEPARTMENT",
                "DELETE ROLE",
                "DELETE AN EMPLOYEE",
                "VIEW TOTAL BUDGET OF A DEPARTMENT",
                "EXIT"
            ]

        }).then(question => {

            if (question.choice === "VIEW ALL EMPLOYEES")
            {

            }
            else if (question.choice === "VIEW ALL ROLES")
            {

            }
            else if (question.choice === "VIEW ALL DEPARTMENTS")
            {

            } 
            else if (question.choice === "VIEW EMPLOYEES BY MANAGER")
            {

            } 
            else if (question.choice === "VIEW EMPLOYEES BY DEPARTMENT")
            {

            } 
            else if (question.choice === "ADD A DEPARTMENT")
            {

            } 
            else if (question.choice === "ADD A ROLE")
            {

            } 
            else if (question.choice === "ADD AN EMPLOYEE")
            {

            } 
            else if (question.choice === "UPDATE AN EMPLOYEE'S ROLE")
            {

            }
            else if (question.choice === "UPDATE EMPLOYEE'S MANAGERS")
            {

            }
            else if (question.choice === "DELETE ROLE")
            {

            }
            else if (question.choice === "DELETE AN EMPLOYEE")
            {

            }
            else if (question.choice === "DELETE DEPARTMENT")
            {

            }
            else if (question.choice === "VIEW TOTAL BUDGET OF A DEPARTMENT")
            {

            }
            else if (question.choice === "EXIT")
            {

            }
        })
}




//========================================================//
//==================== START APP =========================//
//========================================================//
const app=()=>{
    header();
    promptUser();
}