//========================================================//
//==================== DEPENDENCIES=======================//
//========================================================//
const connection = require("./config/connection")
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require("inquirer");
const { listenerCount } = require("events");


//========================================================//
//================== CONNECTING TO DB ====================//
//========================================================//
connection.connect((error) => {
    if (error) throw error;
    header();
    promptUser();
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
            name: "questions",
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
                "VIEW TOTAL BUDGET OF A DEPARTMENT"
            ]

        }).then(choices => {
            if (choice === "EMPLOYEES")
                console.log("kjfkds")
        })

}