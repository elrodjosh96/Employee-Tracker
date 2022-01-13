USE employee_db;

INSERT INTO department (
    name
)
VALUES ('Finance'), ('HR'), ('Logistics'), ('Sales'), ('Customer Service');

INSERT INTO role (
    title,
    salary,
    department_id
)
VALUES ('Shipping&Receiving', 40000, 3), ('Sales Lead', 70000, 4), ('Account Handler', 65000, 1), ('Senior HR Manager', 80000, 2);

INSERT INTO employee (
    first_name,
    last_name,
    role_id,
    manager_id
)
VALUES ('John', 'Smith', 1, NULL), ('Bill', 'GATES', 3, 1), ('Mark', 'Hamil', 2, NULL);