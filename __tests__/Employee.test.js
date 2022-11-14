const Employee = require("../lib/Employee");

test("Setting Name via constructor",()=>{
    const name = "John"
    const emp = new Employee(name)
    expect(emp.name).toBe(name)
})

test("Can get name via method",()=>{
    const name = "John"
    const emp = new Employee(name)
    expect(emp.getName()).toBe(name)
})

//everything i need to do via the constructor, i have to test here
    //via contstructor - need a test for the name, email, id
//need to test the method- getName, getID, getEmail, getRole