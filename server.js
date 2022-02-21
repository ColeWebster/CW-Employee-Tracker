const inquirer = require('inquirer');
const express = require("express");
const mysql = require("mysql2");
const cTable = require("console.table");


const PORT = process.env.PORT || 3006;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "employees_db"
},
    console.log('Connection successful')
);

app.use((req, res) => {
    res.status(404).end();
});


connection.connect(function (err) {
    if (err) throw err;
});


function mainMenu() {
    inquirer.prompt({
        type: 'list',
        name: 'selector',
        message: "Please select an option:",
        choices: [
            'View Departments',
            'View Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Quit'
        ]
    })
        .then(function (response) {
            console.log(response.selector);
            switch (response.selector) {
                case "View Departments":
                    findAllDepartments();
                    break;
                case "View Roles":
                    findAllRoles();
                    break;
                case "View All Employees":
                    findAllEmployees();
                    break;
                case "Add a Department":
                    addADepartment();
                    break;
                case "Add a Role":
                    addARole();
                    break;
                case "Add an Employee":
                    addAnEmployee();
                    break;
                default:
                    quit();
                    break;
            }
        });
}

function findAllDepartments() {
    let db = "SELECT * FROM department";
    connection.query(db, function (err, res) {
        if (err) throw err;
        console.log("Viewing all departments");
        console.table(res);
        mainMenu();
    })
};

function findAllRoles() {
    let db = "SELECT * FROM role";
    connection.query(db, function (err, res) {
        if (err) throw err;
        console.log("Viewing all roles");
        console.table(res);
        mainMenu();
    })
};

function findAllEmployees() {
    let db = "SELECT * FROM employee";
    connection.query(db, function (err, res) {
        if (err) throw err;
        console.log("Viewing all employees");
        console.table(res);
        mainMenu();
    })
};

function addADepartment() {
    inquirer.prompt({
        type: "input",
        name: "addDept",
        message: "Please enter the new department name:",
    }).then(function (response) {
        connection.query("INSERT INTO department (name) VALUES (?)", [response.addDept], function (err, res) {
            if (err) throw err;
            console.log("Added new department");
            console.table(res);
            mainMenu();
        })
    })
};

function addARole() {
    inquirer.prompt([
        {
            type: "input",
            name: "addTitle",
            message: "Please enter the new roles title:",
        },
        {
            type: "input",
            name: "addSalary",
            message: "Please enter the new roles salary:",
        },
        {
            type: "input",
            name: "addID",
            message: "Please add the new role's department ID:"
        }]).then(function (response) {
            connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [response.addTitle, response.addSalary, response.addID ], function (err, res) {
                if (err) throw err;
                console.log("Added new role!");
                console.table(res);
                mainMenu();
            })
        })
};

function addAnEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "addFirstName",
            message: "Please enter their first name:",
        },
        {
            type: "input",
            name: "addLastName",
            message: "Please enter their last name:",
        },
        {
            type: "input",
            name: "addID",
            message: "Please add the new employees role ID:"
        }]
        ).then(function (response) {
            connection.query("INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)", [response.addFirstName, response.addLastName, response.addID ], function (err, res) {
                if (err) throw err;
                console.log("Added new employee!");
                console.table(res);
                mainMenu();
            })
        })
};


function quit() {
    connection.end();
    process.exit();
};

mainMenu();