import {
    createRange,
  } from "../challenges/exercise007";

  describe("createRange", () => {
    test("return a range of numbers as an array", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    });

    test("returns a range of numbers with step 1 if it is not provided", () => {
        expect(createRange(5, 10)).toEqual([5, 6, 7, 8, 9, 10]);
    });
  });