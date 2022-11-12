// Include package needed for this application
const inquirer = require('inquirer');
//^ This usually means you have to install the package. The package here that we need to install is 'Inquirer'
  //https://www.npmjs.com/package/inquirer

  const Employee = require('./lib/employee')
  const Manager = require('./lib/manager');
  const Engineer = require('./lib/engineer');
  const Intern = require('./lib/intern');
  const fs = require('fs');

  // const employeeList = [];

  
