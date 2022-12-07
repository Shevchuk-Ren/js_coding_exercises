import {
    areWeCovered,
    sumMultiples,
    isValidDNA,
  } from "../challenges/exercise006";

  describe("areWeCovered", () => {
    test("returns true/false depending on whether there are enough staff scheduled for the given day", () => {
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "lilly", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Sally", rota: ["Monday", "Tuesday"] },
           ];
      expect(areWeCovered(staff, "Tuesday")).toBe(true);
      expect(areWeCovered(staff, "Monday")).toBe(false);
      expect(areWeCovered(staff, "Sunday")).toBe(false);
    })
  });

  describe("sumMultiples", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
        
      expect(sumMultiples([1, 3, 5, 15, 9])).toBe(32);
      expect(sumMultiples([1, 2, 7, 77, 52])).toBe(0);
      expect(sumMultiples([5, 15, 21, 45])).toBe(86);
    })
  });

  describe("isValidDNA", () => {
    test("returns true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only", () => {
        
      expect(isValidDNA('ACTG')).toBe(true);
      expect(isValidDNA('ASRF')).toBe(false);
      expect(isValidDNA('CAAT')).toBe(false);
    })

    test("returns a false if string less or more than 4 characters", () => {
        expect(isValidDNA('ACCTG')).toBe(false);
        expect(isValidDNA('A')).toBe(false);
    });
  });