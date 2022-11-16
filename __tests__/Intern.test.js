const Intern = require("../lib/Intern");

//Want to test the getRole - Passed 
test("Testing Role",()=>{
    const getRole = "Intern"
    const intern = new Intern(getRole)
    expect(intern.getRole()).toBe(getRole)
})



//Want to test school - Passed 
test("Testing School",()=>{
    const getSchool = this.school
    const intern = new Intern(getSchool)
    expect(intern.getSchool()).toBe(getSchool)
})

