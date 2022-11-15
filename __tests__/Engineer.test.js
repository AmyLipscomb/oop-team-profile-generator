const Engineer = require("../lib/Engineer");

test("Testing Role",()=>{
    const role = "Engineer"
    const engineer = new Engineer(role)
    expect(engineer.role()).toBe(role)
})

test("Testing gitHub",()=>{
    const gitHub = "GitHub"
    const engineer = new Engineer(gitHub)
    expect(engineer.gitHub).toBe(gitHub)
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