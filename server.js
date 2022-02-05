const express = require("express");
const mysql = require("mysql2");
const inquirer = require('inquirer');
const database = require("./db/dbQueries");

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

mainMenu = () => {
    inquirer
        .prompt([
                {
                    type: 'list',
                    name: 'options',
                    message: 'What would you like to do?',
                    choices: [
                            "View all Departments", 
                            "View all Roles", 
                            "View all Employees", 
                            "Quit",
                        ],
                    },
                ])
                .then((answers) => navigateMenu(answers))
}

mainMenu();