const Engineer = require("../lib/engineer");

describe("Employee Status Test", () => {
    describe("Employee Method - GetEmployeeName", () => {
        it("should return 'Engineer' ", () => {
            // Setup
            const engineer = new Engineer();

            //Expect/Execute
            expect(engineer.getEmployeeName()).toEqual("Engineer");
        });
    });
});