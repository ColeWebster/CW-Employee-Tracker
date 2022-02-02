-- Rarely Used - Dont get fired for this --
DROP DATABASE IF EXISTS employes;
CREATE DATABASE employees;

USE employees;


CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL,
)

CREATE TABLE role (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary
    department_id
)

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name
    last_name
    role_id
    manager_id
)