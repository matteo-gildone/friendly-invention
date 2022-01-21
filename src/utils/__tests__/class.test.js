import {isClassAllowed} from "../class";

describe("Utils", () => {
    describe("Class", () => {
        describe('isClassAllowed', function () {
            it('should not be allowed to be mage ', function () {
                const isMageAllowed = isClassAllowed(["Cleric", "Fighter", "Thief"], "Mage");
                expect(isMageAllowed).toBeFalsy();
            });
            it('should be allowed to be mage ', function () {
                const isMageAllowed = isClassAllowed(["Cleric", "Fighter", "Thief", "Mage"], "Mage");
                expect(isMageAllowed).toBeTruthy();
            });
        });
    });
});