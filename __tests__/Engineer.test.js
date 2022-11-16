const Engineer = require("../lib/Engineer");


//Want to test the getRole - Passed 
test("Testing Role",()=>{
    const getRole = "Engineer"
    const engineer = new Engineer(getRole)
    expect(engineer.getRole()).toBe(getRole)
});

//Want to test the github- Passed 
test("Testing gitHub",()=>{
    const getGithub = this.github //made this equal to what was being returned in the function on 'Engineer.js'
    const engineer = new Engineer(getGithub)
    expect(engineer.getGithub()).toBe(getGithub)
})


















