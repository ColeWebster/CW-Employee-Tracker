const inquirer = require('inquirer');
const {prompt} = require('inquirer');
const db = require('.');
const connection = require("./connection")

//inqurier here
function mainMenu() {
    inquirer.prompt([
        {
            name: 'choice',
            type: 'list',
            message: 'What would you like to do?'
            choices: [
                {
                    name: "View all employees",
                    value: "VIEW_EMPLOYEES"
                },
                // Employees by Department
                {
                    name: "View Employees by department",
                    value: "Employees_Department"
                },
                // Employees by Manager
                {
                    name: "View employees by Manager",
                    value: "Manager_ID"
                },
                //Add Employer
                {
                    name: "Select here to Add an Employee",
                    value: "Add_Employee"
                },
                //Delete Employer
                {
                    name: "Select here to Delete an Employer",
                    value: "Destroy_Employer"
                },
                //View all roles
                {
                    name: "View all roles",
                    value: "View_All"
                },
                //More choices are needed!
                {
                    name: "Add more choices?",
                    value: "Add_More"
                },
                // Terminate the program
                {
                    name: "Quit",
                    value: "QUIT"
                },
            ]
        }
    ]).then(res => {
        let choice = res.choices;
        if (res.choice == "VIEW_EMPLOYEES"){
            db.findAllEmployees;
        } else if (res.choice == "Employees_Department"){
            db.findAllDepartments;
        } else if (res.choice == "Manager_ID")
    //})
};

mainMenu();