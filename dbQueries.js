const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees() {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT (manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employeee.role_id LEFT JOING department on role.department_id = department.id LEFT JOIN employee mannager on manager.id = employee.manager_id;"
        );
    }

    //Find all except the given ID

    // Create a new employee

    // Remove an employee with the given id

    // Update the given employees role -- Bonus


}

module.exports = new DB(connection);