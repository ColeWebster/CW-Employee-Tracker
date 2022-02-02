-- Rarely Used - Dont get fired for this --
DROP DATABASE IF EXISTS employes;
CREATE DATABASE employees_db;

USE employees_db;


CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT, 
    name VARCHAR(30) UNIQUE NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT UNSIGNED AUTO_INCREMENT,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary INT,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR (30),
    role_id INT,
    manager_id INT,
  	FOREIGN KEY (role_id)
  	REFERENCES role(id)
);