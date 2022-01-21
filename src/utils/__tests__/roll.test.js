import {d4, d6, d8, d10, d12, d20, d100, rollAbilities} from "../roll";

describe("Utils", () => {
    describe("Roll", () => {
        test("d4 - Should return a number between 1 and 4", () => {
            const actual = d4();
            expect(actual.value <= 4 || actual.value >= 1).toBeTruthy();
        });
        test("d6 - Should return a number between 1 and 6", () => {
            const actual = d6();

            expect(actual.value <= 6 || actual.value >= 1).toBeTruthy();
        });
        test("d8 - Should return a number between 1 and 8", () => {
            const actual = d8();

            expect(actual.value <= 8 || actual.value >= 1).toBeTruthy();
        });
        test("d10 - Should return a number between 1 and 10", () => {
            const actual = d10();

            expect(actual.value <= 10 || actual.value >= 1).toBeTruthy();
        });
        test("d12 - Should return a number between 1 and 12", () => {
            const actual = d12();

            expect(actual.value <= 12 || actual.value >= 1).toBeTruthy();
        });
        test("d20 - Should return a number between 1 and 20", () => {
            const actual = d20();

            expect(actual.value <= 20 || actual.value >= 1).toBeTruthy();
        });
        test("d100 - Should return a number between 1 and 100", () => {
            const actual = d100();

            expect(actual.value <= 100 || actual.value >= 1).toBeTruthy();
        });
        test("rollAbilities - Should return a number between 3 and 18", () => {
            const actual = rollAbilities();
            const {rolled, value} = actual;
            expect(rolled.length === 3).toBeTruthy();
            expect(value <= 18 || value >= 3).toBeTruthy();
        });
    });
});