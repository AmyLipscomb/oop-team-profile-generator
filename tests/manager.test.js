const Manager = require("../lib/manager");

describe("Employee Status", () => {
    describe("ManagerTitle - GetEmployeeTitle", () => {
        it("should return 'Manager' ", () => {
            // Setup
            const manager = new Manager;

            //Expect/Execute
            expect(manager.getEmployeeTitle()).toEqual("Manager Title");
        });
    });
});