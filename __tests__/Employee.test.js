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

//Passed
test("Can get id via method",()=>{
    const getId = this.id
    const emp = new Employee(this.id)
    expect(emp.getId()).toBe(this.id)
})

//Passed
test("Setting Email via constructor",()=>{
    const email = "john@fakemail.com"
    const emp = new Employee(email)
    expect(emp.name).toBe(email)
})

//Passed
test("Can get email via method",()=>{
    const getEmail = this.email
    const emp = new Employee(this.email)
    expect(emp.getEmail()).toBe(this.email)
})

//Passed
test("Can get role via method",()=>{
    const role = "Employee"
    const emp = new Employee(role)
    expect(emp.getRole()).toBe(role)
})



//everything i need to do via the constructor, i have to test here
    //via contstructor - need a test for the name, email, id
//need to test the method- getName, getID, getEmail, getRole