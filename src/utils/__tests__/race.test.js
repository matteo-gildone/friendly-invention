import {isDwarf, isElf, isHalfling} from "../race";

describe("Utils", () => {
    describe("Races", () => {
        describe("Dwarf", () => {
            const validAbilities = {
                STR: 0,
                DEX: 0,
                CON: 9,
                INT: 0,
                WIS: 0,
                CHA: 17
            };

            const invalidAbilities1 = {
                STR: 0,
                DEX: 0,
                CON: 9,
                INT: 0,
                WIS: 0,
                CHA: 18
            };

            const invalidAbilities2 = {
                STR: 0,
                DEX: 0,
                CON: 8,
                INT: 0,
                WIS: 0,
                CHA: 8
            };

            it('should be allowed to be dwarf ', function () {
                expect(isDwarf(validAbilities)).toBeTruthy();
            });

            it('should not be allowed to be dwarf ', function () {
                expect(isDwarf(invalidAbilities1)).toBeFalsy();
                expect(isDwarf(invalidAbilities2)).toBeFalsy();
            });
        });
        describe("Elf", () => {
            const validAbilities = {
                STR: 0,
                DEX: 0,
                CON: 17,
                INT: 9,
                WIS: 0,
                CHA: 0
            };

            const invalidAbilities1 = {
                STR: 0,
                DEX: 0,
                CON: 18,
                INT: 9,
                WIS: 0,
                CHA: 0
            };

            const invalidAbilities2 = {
                STR: 0,
                DEX: 0,
                CON: 17,
                INT: 8,
                WIS: 0,
                CHA: 0
            };

            it('should be allowed to be elf ', function () {
                expect(isElf(validAbilities)).toBeTruthy();
            });

            it('should not be allowed to be elf ', function () {
                expect(isElf(invalidAbilities1)).toBeFalsy();
                expect(isElf(invalidAbilities2)).toBeFalsy();
            });
        });
        describe("Halfling", () => {
            const validAbilities = {
                STR: 17,
                DEX: 9,
                CON: 0,
                INT: 0,
                WIS: 0,
                CHA: 0
            };

            const invalidAbilities1 = {
                STR: 18,
                DEX: 9,
                CON: 0,
                INT: 0,
                WIS: 0,
                CHA: 0
            };

            const invalidAbilities2 = {
                STR: 17,
                DEX: 8,
                CON: 0,
                INT: 0,
                WIS: 0,
                CHA: 0
            };

            it('should be allowed to be halfling ', function () {
                expect(isHalfling(validAbilities)).toBeTruthy();
            });

            it('should not be allowed to be halfling ', function () {
                expect(isHalfling(invalidAbilities1)).toBeFalsy();
                expect(isHalfling(invalidAbilities2)).toBeFalsy();
            });
        });
    });
});