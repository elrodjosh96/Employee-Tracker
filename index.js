const inquirer = require('inquirer');
const connection = require('./connection.js');
require('console.table');


const userInput = function(){
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'Select from the following',
      name: 'userchoice',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }])
    .then((response) => {
        console.log(response)
        switch (response.userchoice) {
          case 'view all departments':
              viewAllDepartments();
            break;
            case 'view all roles':
                viewAllRoles();
            break;
            case 'view all employees':
                viewAllEmployees();
            break;
            case 'add a department':
                addDepartment();
            break;
            case 'add a role':
                addRole();
            break;
            case 'add an employee':
                addEmployee();
            break;
            case 'update an employee role':
                updateEmployeeRole();
            break;
        }
    });
  }
async function viewAllDepartments() {
    console.log('view department')
  const departments = await connection.promise().query('SELECT * FROM department')
  console.table(departments[0]);
  userInput();
}

userInput();
    
async function viewAllRoles() {
  console.log('view role')
const roles = await connection.promise().query('SELECT * FROM role')
console.table(roles[0]);
userInput();
}

async function viewAllEmployees() {
  console.log('view employee')
const employees = await connection.promise().query('SELECT * FROM employee')
console.table(employees[0]);
userInput();
}

// SCHEMA.SQL
  // 3 tables
  // every table has a primary key ID
  // DEPARTMENT and ROLE
    // Department has many roles
    // ROLE has a foreign key referencing Department
  // ROLE and EMPLOYEE
    // An employee has a single role, many employees can be the same role
    // EMPLOYEE has a foreign key referencing ROLE
  // EMPLOYEE
    // manager_id FOREIGN KEY referencing the same table.
    // join Employee on itself to get manager

// SEEDS.SQL
  // fill each table with data

// Queries
  // WHEN I choose to view all departments
    // SELECT *
  // WHEN I choose to view all roles
    // SELECT * FROM role JOIN department
  // WHEN I choose to view all employees (hard)
    // SELECT attributes FROM employee JOIN role JOIN department LEFT JOIN Employee
      // rename EMPLOYEE e1 and EMPLOYEE e2
      // select attributes e1.first_name, e1.last_name
      // get manager name from e2
  // WHEN I choose to add a department
    // INSERT
  // WHEN I choose to add a role (slightly hard)
    // SELECT all the departments
      // whichever dept you select from list, grab the ID
      // INSERT INTO ROLE title, salary, dept_id
  // WHEN I choose to add an employee
    // SELECT all the roles
      // get role_id
    // SELECT all the employees
      // get id of employee you want to be manager
    // INSERT INTO employee first, last, role_id, manager_id
  // WHEN I choose to update an employee role
    // SELECT all the employees
      // pick which id you're going to update
    // SELECT all roles
      // pick which role_id you're going to update
    // UPDATE query