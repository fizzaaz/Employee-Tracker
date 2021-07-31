//========================================================//
//==================== DEPENDENCIES=======================//
//========================================================//
const connection = require("./config/connection")
const chalk = require('chalk');
const figlet = require('figlet');
const cTable = require('console.table');
const inquirer = require("inquirer");

const Employee = require('./classes/js/Employee')
const Department = require("./classes/js/Department");
const Role=require("./classes/js/Role")
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

const tHeader = (heading) => {
    console.log(``);
    console.log(``);
    console.log(chalk.yellowBright.bold(`====================================================================================`));
    console.log(`                              ` + chalk.magenta.bold(heading));
    console.log(chalk.yellow.bold(`====================================================================================`));
}
//========================================================//
//==================== PROMPT USER =======================//
//========================================================//
function promptUser() {
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
            if (question.choice === "VIEW ALL EMPLOYEES") {
                tHeader("View All Employees");
                let emp = new Employee(1, "a", "b", 1, 2);
                emp.ViewEmployee(connection);
                promptUser();
            }
            else if (question.choice === "VIEW ALL ROLES") {
              
                    tHeader("View All Roles");
                    let role = new Role(1, "a", 2, 100, 2);
                    role.ViewRoles(connection);
                    promptUser();
            }
            else if (question.choice === "VIEW ALL DEPARTMENTS") {
                tHeader("View Departments")
                let dept = new Department("abc");
                dept.ViewDepartment(connection);

                promptUser();


            }
            else if (question.choice === "VIEW EMPLOYEES BY MANAGER") {
                tHeader("View Employees BY Manager");
                let emp = new Employee(1, "a", "b", 1, 2);
                emp.ViewEmployeeByMgr(connection);
                promptUser();

            }
            else if (question.choice === "VIEW EMPLOYEES BY DEPARTMENT") {
                tHeader("View Employees BY Departments");
                let emp = new Employee(1, "a", "b", 1, 2);
                emp.ViewEmployeeByDpt(connection);
                promptUser();
            }
            else if (question.choice === "ADD A DEPARTMENT") {
                addDept();
            }
            else if (question.choice === "ADD A ROLE") {

            }
            else if (question.choice === "ADD AN EMPLOYEE") {
                addEmp();
            }
            else if (question.choice === "UPDATE AN EMPLOYEE'S ROLE") {

            }
            else if (question.choice === "UPDATE EMPLOYEE'S MANAGERS") {

            }
            else if (question.choice === "DELETE ROLE") {

            }
            else if (question.choice === "DELETE AN EMPLOYEE") {

            }
            else if (question.choice === "DELETE DEPARTMENT") {
                deleteDept();
            }
            else if (question.choice === "VIEW TOTAL BUDGET OF A DEPARTMENT") {

            }
            else if (question.choice === "EXIT") {
                process.exit();

            }
            console.log(``);

        })
}


//ASK FOR DEPARTMENT NAME
const addDept = () => {
    inquirer.prompt({

        type: "input",
        name: "deptName",
        message: "Enter the new Department Name"
    }).then(Response => {
        tHeader("Add New Department")
        let dept = new Department(Response.deptName);
        dept.AddDepartment(connection, dept.getDeptName());
        console.log(``);
        console.log(chalk.magenta.bold('Sucessfully New Department is Added'));
        console.log(``);
        promptUser();
    })
}
const deleteDept = () => {
    var depts = [];
    let sqlQuery = `Select name from department`;
    connection.query(sqlQuery, (err, res) => {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
            depts.push(res[i].name);
        }
        inquirer.prompt({
            type: "list",
            name: "Departments",
            message: "Choose the Department you would like to delete?",
            choices: depts
        }).then(response => {
            for (let i = 0; i < depts.length; i++) {
                if (response.Departments == depts[i]) {
                    let dept = new Department(response.Departments);
                    dept.DeleteDepartment(connection, dept.getDeptName())
                    break;
                }
            }
            console.log(``);
            console.log(chalk.magenta.bold('New Department is Sucessfully Deleted'));
            console.log(``);
            promptUser();
        })
    });
}

////////////Employee 
const addEmp = () => {
    const emp = [];

    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "Enter Employee's First Name?",
            validate: firstName => {
                if (firstName) {
                    return true;
                } else {
                    console.log('Please enter a first name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'lastName',
            message: "Enter Employee's Last Name?",
            validate: lastName => {
                if (lastName) {
                    return true;
                } else {
                    console.log('Please enter a last name');
                    return false;
                }
            }
        }
    ]).then(response => {
        emp.push(response.firstName);
        emp.push(response.lastName)
        var roles = [];
        let sqlQuery = `Select title from role`;
        connection.query(sqlQuery, (err, res) => {
            if (err) throw err;
            for (let i = 0; i < res.length; i++) {
                roles.push(res[i].title);
            }
            inquirer.prompt({
                type: "list",
                name: "role",
                message: "Choose the Role you would like to choose for this employee?",
                choices: roles
            }).then(response => {
                let sqlQuery = `Select id from role where title="` + response.role + `"`;
                connection.query(sqlQuery, (err, res) => {
                    if (err) throw err;
                    emp.push(res[0].id)
                })
                var mgr = [];
                let sql = `Select first_name as MANAGER from employee`;
                connection.query(sql, (err, res) => {
                    if (err) throw err;
                    for (let i = 0; i < res.length; i++) {
                        mgr.push(res[i].MANAGER);
                    }
                    inquirer.prompt({
                        type: "list",
                        name: "mgr",
                        message: "Choose the Manager you would like to choose for this employee?",
                        choices: mgr
                    }).then(response => {
                        let sqlQuery = `Select id as mgrID from employee where first_name="` + response.mgr + `"`;
                        connection.query(sqlQuery, (err, res) => {
                            if (err) throw err;
                            emp.push(res[0].mgrID)
                            console.log(emp)
let e=new Employee(1,emp[0],emp[1],emp[2],emp[3]);
console.log(e)
e.addEmployee(connection,e.getfirstName(),e.getLastName(),e.getrid(),e.getMgrID());
console.log(``);
console.log(chalk.magenta.bold('New Employee is Sucessfully Added'));
console.log(``);

promptUser();
                        })
                    })
                });
            });
        });
    });
}
        










        //========================================================//
        //==================== START APP =========================//
        //========================================================//
        const app = () => {
            header();
            promptUser();
        }
