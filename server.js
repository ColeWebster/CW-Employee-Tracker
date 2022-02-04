const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
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
    inquirer.prompt([
        {
            type: 'list',
            name: 'View',
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
    
    //})
};

mainMenu();