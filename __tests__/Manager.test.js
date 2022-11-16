const Manager = require("../lib/Manager");

//Want to test the getRole 
    //Passed
test("Testing Role",()=>{
    const getRole = "Manager"
    const manager = new Manager(getRole)
    expect(manager.getRole()).toBe(getRole)
})



//Want to test that you're getting the office number 
    //Passed

test("Testing Office Number",()=>{
    const getOfficeNumber = this.officeNumber
    const manager = new Manager(getOfficeNumber)
    expect(manager.getOfficeNumber()).toBe(getOfficeNumber)
})