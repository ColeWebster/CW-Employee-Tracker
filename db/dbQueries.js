// const { removeListener } = require("./connection");
const database = require("./connection");

class Queries {
    constructor(database) {
        this.database= database;
    }
    // View all Departments
    findAllDepartments(){
        return this.connection
            .promise()
            .query(
              `  SELECT id, name 
                FROM department
                ORDER BY id`
            )
        }
    // View all roles
    // findAllRoles(){

    // }
    
    // Find all Employees
    findAllEmployees() {
       return this.connection
            .promise()
            .query(
                `SELECT id, first_name, last_name, role_id
                FROM employee
                ORDER BY role_id`
            )
        }        
    // Add a department

    // add a role

    // add an employee

    //update an employee

}

module.exports = new Queries(database);