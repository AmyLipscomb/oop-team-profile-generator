const Employee = require("../lib/Employee");

//Passed
test("Setting Name via constructor",()=>{
    const name = "John"
    const emp = new Employee(name)
    expect(emp.name).toBe(name)
})

//Passed
test("Can get name via method",()=>{
    const name = "John"
    const emp = new Employee(name)
    expect(emp.getName()).toBe(name)
})

//Passed
test("Setting ID via constructor",()=>{
    const id = "1"
    const emp = new Employee(id)
    expect(emp.name).toBe(id)
})

//Fail
test("Can get ID via method",()=>{
    const id = "1"
    const emp = new Employee(id)
    expect(emp.getId()).toBe(id)
})

//Passed
test("Setting Email via constructor",()=>{
    const email = "john@fakemail.com"
    const emp = new Employee(email)
    expect(emp.name).toBe(email)
})

//Fail
test("Can get email via method",()=>{
    const email = "john@fakemail.com"
    const emp = new Employee(email)
    expect(emp.getEmail()).toBe(email)
})


//everything i need to do via the constructor, i have to test here
    //via contstructor - need a test for the name, email, id
//need to test the method- getName, getID, getEmail, getRole