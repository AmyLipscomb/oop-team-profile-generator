const Manager = require("../lib/manager");

describe("Employee Status Test", () => {
    describe("Employee Method - GetEmployeeName", () => {
        it("should return 'Manager' ", () => {
            // Setup
            const manager = new Manager();

            //Expect/Execute
            expect(manager.getEmployeeName()).toEqual("Manager");
        });
    });
});