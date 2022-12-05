import {
    areWeCovered,
  } from "../challenges/exercise006";

  describe("areWeCovered", () => {
    test("return true/false depending on whether there are enough staff scheduled for the given day", () => {
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