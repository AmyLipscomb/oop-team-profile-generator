// Include package needed for this application
const inquirer = require('inquirer');
//^ This usually means you have to install the package. The package here that we need to install is 'Inquirer'
  //https://www.npmjs.com/package/inquirer

  const Employee = require('./lib/Employee')
  const Manager = require('./lib/Manager');
  const Engineer = require('./lib/Engineer');
  const Intern = require('./lib/Intern');
  const fs = require('fs');

  const employeeList = [];
  const createManager = ()=>{
    inquirer.prompt([
      {
        type:"input",
        name: "name",
        message: "What is the manager's name?"
      },
      {
        type:"input",
        name: "id",
        message: "What is the manager's id?"
      },
      {
        type:"input",
        name: "email",
        message: "What is the manager's email?"
      },
      {
        type:"input",
        name: "officeNumber",
        message: "What is the manager's office number?"
      }
    ]).then((answers)=>{
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      employeeList.push(manager);
      mainMenu()
    })
  }
  const mainMenu = ()=>{
    inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do next?",
        choices: ["Add Engineer", "Add Intern", "Build Team"],
      }
    ]).then((answers)=>{
      switch(answers.choice){
        case "Add Engineer":
          addEngineer();
          break;
        case "Add Intern":
          addIntern();
          break;
        default:
          buildTeam()
      }
    })
  }  

  const addEngineer = ()=>{
    inquirer.prompt([
      {
        type:"input",
        name: "name",
        message: "What is the engineer's name?"
      },
      {
        type:"input",
        name: "id",
        message: "What is the engineer's id?"
      },
      {
        type:"input",
        name: "email",
        message: "What is the engineer's email?"
      },
      {
        type:"input",
        name: "github",
        message: "What is the engineer's github?"
      }
    ]).then((answers)=>{
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      employeeList.push(engineer);
      mainMenu()
    })
  }
  
  const addIntern = ()=>{
    inquirer.prompt([
      {
        type:"input",
        name: "name",
        message: "What is the intern's name?"
      },
      {
        type:"input",
        name: "id",
        message: "What is the intern's id?"
      },
      {
        type:"input",
        name: "email",
        message: "What is the intern's email?"
      },
      {
        type:"input",
        name: "school",
        message: "What is the intern's school?"
      }
    ]).then((answers)=>{
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      employeeList.push(intern);
      mainMenu()
    })}



  createManager(); //leave at the bottom so that it doesn't get hoisted at the top.
 
