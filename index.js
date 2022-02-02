const {prompt} = require('inquirer');
const db = require('./db');

//inqurier here
function mainMenu() {
    prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?'
            choices: [
                {
                    name: "View all employees"
                    value: "VIEW_EMPLOYEES"
                },
                // Employees by Department
                // Employees by Manager
                //Add Employer
                //Delete Employer
                //View all roles
                //More choices are needed!
                {
                    name: "Quit"
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        //Call the appropraite function on what the user chooses
        //How would we organize this?
    })
}

mainMenu();