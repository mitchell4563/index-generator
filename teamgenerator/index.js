//required modules
const fs = require('fs');
const inquirer = require('inquirer')
//employee objects
const Employee = require('.lib/Employee')
const Engineer = require('.lib/Engineer')
const Intern = require('.lib/Intern')
const Manager = require('.lib/Manager')
//employee card html
const employeeCards = require('.src/employee-cards.js')
const newEngineer = require('.src/new-engineer.js')
const newIntern = require('.src/new-intern.js')
const newManager = require('.src/new-manager.js')