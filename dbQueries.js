const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees() {
       SELECT employee_id, employee.first_name, employee.last_name, role.title, department.name, employee.manager_id
       FROM employee
       JOIN role
       ON employee.role_id=role.role_id
       JOIN department
       ON department.id=role.department.id

    }

    //Find all except the given ID
    findEmployeeId() {
        return this.connection.query(
          SELECT employee.id       
        )
    }
    // Create a new employee

    // Remove an employee with the given id

    // Update the given employees role -- Bonus


}

module.exports = new DB(connection);