const Intern = require("../lib/Intern");

//Passed
test("Testing Role",()=>{
    const getRole = "Intern"
    const intern = new Intern(getRole)
    expect(intern.getRole()).toBe(getRole)
})



//Need to add test for school


