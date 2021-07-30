//========================================================//
//==================== DEPENDENCIES=======================//
//========================================================//
const connection = require("./config/connection")
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require("inquirer");

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



const connection = require('./config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const chalk = require('chalk');
const figlet = require('figlet');
const validate = require('./javascript/validate');

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
  promptUser();
});

// Prompt User for Choices
const promptUser = () => {
  inquirer.prompt([
      {
        name: 'choices',
        type: 'list',
        message: 'Please select an option:',
        choices: [
          'View All Employees',
          'View All Roles',
          'View All Departments',
          'View All Employees By Department',
          'View Department Budgets',
          'Update Employee Role',
          'Update Employee Manager',
          'Add Employee',
          'Add Role',
          'Add Department',
          'Remove Employee',
          'Remove Role',
          'Remove Department',
          'Exit'
          ]
      }
    ])
    .then((answers) => {
      const {choices} = answers;

        if (choices === 'View All Employees') {
            viewAllEmployees();
        }

        if (choices === 'View All Departments') {
          viewAllDepartments();
      }

        if (choices === 'View All Employees By Department') {
            viewEmployeesByDepartment();
        }

        if (choices === 'Add Employee') {
            addEmployee();
        }

        if (choices === 'Remove Employee') {
            removeEmployee();
        }

        if (choices === 'Update Employee Role') {
            updateEmployeeRole();
        }

        if (choices === 'Update Employee Manager') {
            updateEmployeeManager();
        }

        if (choices === 'View All Roles') {
            viewAllRoles();
        }

        if (choices === 'Add Role') {
            addRole();
        }

        if (choices === 'Remove Role') {
            removeRole();
        }

        if (choices === 'Add Department') {
            addDepartment();
        }

        if (choices === 'View Department Budgets') {
            viewDepartmentBudget();
        }

        if (choices === 'Remove Department') {
            removeDepartment();
        }

        if (choices === 'Exit') {
            connection.end();
        }
  });
};





//========================================================//
//==================== START APP =========================//
//========================================================//
const app=()=>{
    header();
    promptUser();
}