import {getModifier, createFromAttributes} from "../character";

describe("Utils", () => {
    describe("Character", () => {
        describe("getModifier", () => {
            test("Should return 0 if score is out of range", ()=> {
                const score = 100;
                expect(getModifier(score) === 0).toBeTruthy();
            });
            test("Should return 0 if score is not a number", ()=> {
                expect(getModifier("I'm a string") === 0).toBeTruthy();
                expect(getModifier(false) === 0).toBeTruthy();
                expect(getModifier(null) === 0).toBeTruthy();
                expect(getModifier(undefined) === 0).toBeTruthy();
                expect(getModifier([1,2,3,4,5]) === 0).toBeTruthy();
                expect(getModifier({}) === 0).toBeTruthy();
            });
            test("Should return a number", ()=> {
                const actual = getModifier(10);
                const expected = 0;
                expect(actual === expected).toBeTruthy();
            });
        });
        describe("createFromAttributes", () => {
            const actual = Object.keys(createFromAttributes(["str", "dex", "cos", "int", "wis", "cha"]));
            const expected = ["str", "dex", "cos", "int", "wis", "cha"];
            expect(actual).toEqual(expected);
        });
    });
});