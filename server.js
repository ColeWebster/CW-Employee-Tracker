const inquirer = require('inquirer');
const express = require("express");
const mysql = require("mysql2");
const cTable = require("console.table");


const PORT = process.env.PORT || 3006;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const connection = mysql.createConnection ({
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
    inquirer
       .prompt({
           type: 'list',
           choices: [
               'View Departments',
               'View Roles',
               'View All Employees',
               'Quit'
           ],
           message: "Please select an option:",
           name: 'selector'
       })
       .then(function(response) {
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
                    
                default:
                    quit();
                    break;
           }
       });
}

function findAllDepartments() {
    let query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.log("Viewing all departments");
        console.table(res);
        mainMenu();
    })
};

function findAllRoles() {
    let query = "SELECT * FROM role";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.log("Viewing all roles");
        console.table(res);
        mainMenu();
    })
};

function findAllEmployees() {
    let query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.log("Viewing all employees");
        console.table(res);
        mainMenu();
    })
};

function quit() {
    connection.end();
    process.exit();
};

mainMenu();