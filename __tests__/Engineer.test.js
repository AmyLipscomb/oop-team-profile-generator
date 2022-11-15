const Engineer = require("../lib/Engineer");

//Passed 
test("Testing Role",()=>{
    const getRole = "Engineer"
    const engineer = new Engineer(getRole)
    expect(engineer.getRole()).toBe(getRole)
})

//Fail
test("Testing gitHub",()=>{
    const getGithub = "ibealec"
    const engineer = new Engineer(getGithub)
    expect(engineer.getGithub).toBe(getGithub)
})



















// describe("Employee Status Test", () => {
//     describe("Employee Method - GetEmployeeName", () => {
//         it("should return 'Engineer' ", () => {
//             // Setup
//             const engineer = new Engineer();

//             //Expect/Execute
//             expect(engineer.getEmployeeName()).toEqual("Engineer");
//         });
//     });
// });

//Want to test the getRole
//Want to test the github