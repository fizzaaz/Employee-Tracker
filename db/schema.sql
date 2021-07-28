--DELETE DATABASE IF ALREADY EXISTS--
DROP DATABASE IF EXISTS EmployeeDB;
--CREATING OUR DATABASE --
CREATE DATABASE EmployeeDB;

--USE EMPLOYEEDB FOR FUTHER CRUD FUNCTION ETC--
USE EmployeeDB;

-- CREATING DEPARTMENT TABLE ----
CREATE TABLE department(
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(30)
)

-- CREATING ROLE TABLE ----
CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title  VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INTEGER,
    --INT to hold reference to department role belongs to-
    FOREIGN KEY department_id REFERENCES department(id)
)

-- CREATING EMPLOYEE TABLE ----
CREATE TABLE employee (
    id INTEGER AUTO AUTO_INCREMENT PRIMARY KEY  NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    --INT to hold reference to another employee that is manager of the current employee--
    manager_id INTEGER,
    --INT to hold reference to employee role--
    FOREIGN KEY role_id REFERENCES role(id)    
)


