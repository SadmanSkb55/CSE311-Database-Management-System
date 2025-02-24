-- CREATE DATABASE LABTASK1;
USE LABTASK1;
/*
CREATE TABLE Department (
    dept_id INT auto_increment PRIMARY KEY,
    dept_name VARCHAR(100)
);

ALTER TABLE Department AUTO_INCREMENT = 10;
*/
-- select* from Department;
/*
CREATE TABLE Employee (
    employee_id INT auto_increment PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    Salary DECIMAL(7,2), 
    hire_date DATE,
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES Department(dept_id)
);

*/
/*
INSERT INTO Department(dept_id,dept_name) 
VALUES
(10, "HR"),
(20, "IT"),
(30, "Finance"),
(40, "Marketing")
;
*/
/*
INSERT INTO Employee (first_name, last_name, Salary, hire_date, dept_id) VALUES
('John', 'Cena', 7500.00, '2022-06-15', 10),
('Sultan', 'Sulaiman', 6000.50, '2021-08-20', 20),
('Kamruzzaman', 'Kamruzzaman', 4500.00, '2018-11-10', 10),
('Osman', 'Goni', 8200.00, '2023-02-05', 30),
('Chris', 'Gayle', 5000.00, '2019-07-08', 20);

SELECT * FROM Employee;
*/

-- SELECT * FROM Department; -- 1
-- SELECT first_name, last_name FROM Employee; -- 2
-- SELECT last_name, (Salary / 12) AS monthly_salary FROM Employee; -- 3
-- SELECT * FROM Employee WHERE Salary >= 5000; -- 4
-- SELECT * FROM Employee WHERE hire_date > '2021-01-01'; -- 5

/*
SELECT first_name, last_name, Salary AS annual_salary 
FROM Employee 
WHERE Salary > 6000;*/ -- 6/7

/*
SELECT * FROM Employee 
WHERE dept_id IN (10, 20) 
ORDER BY hire_date;
*/  -- 7/8
/*
SELECT * FROM Employee 
WHERE hire_date < '2019-01-01' 
AND Salary < 5000; */ -- 8/9

/*
SELECT * FROM Employee 
WHERE Salary > (SELECT AVG(Salary) FROM Employee);
*/ -- 9/10

/*
SELECT * FROM Employee 
WHERE hire_date IN (
    SELECT hire_date FROM Employee 
    GROUP BY hire_date 
    HAVING COUNT(*) > 1
);
*/ -- 10/11

/*SELECT * FROM Employee 
WHERE Manager_Id IS NULL;*/ -- 11/12