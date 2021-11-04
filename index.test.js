const { sumAnyNumbers } = require("./index");

describe("Math", () => {
  describe("Sum", () => {
    it("should make sure it sums correctly", () => {
      expect(sumAnyNumbers(2, 2)).toBe(4);
    });

    it("should not allow negative numbers", () => {
      function sumTwoErrorTest() {
        sumAnyNumbers(2, -2);
      }
      expect(sumTwoErrorTest).toThrowError(
        new Error("Sorry buddy only positive numbers")
      );
    });

    it("not accept any other type but numbers", () => {
      function sumTwoErrorTest() {
        sumAnyNumbers([], () => {});
      }
      expect(sumTwoErrorTest).toThrowError(
        new Error("Sorry buddy only positive numbers")
      );
    });

    it("should only accept numbers", () => {
      expect(sumAnyNumbers(2, 3, 4, 5, 6)).toBe(20);
    });

    it("should only sum up to 300, if not overlap", () => {
      expect(sumAnyNumbers(100, 100, 50, 100, 100, 100)).toBe(250);
    });
  });
});
