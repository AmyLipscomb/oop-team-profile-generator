const Manager = require("../lib/Manager");

//Want to test the getRole 
    //Passed- Done
test("Testing Role",()=>{
    const getRole = "Manager"
    const manager = new Manager(getRole)
    expect(manager.getRole()).toBe(getRole)
})



//Want to test that you're getting the officenumber
