import { expect, it, test } from "vitest";
import { add } from "./math";

// test("adds 1 + 2 to equal 3", () => {
//   const array = [1, 2];
//   expect(add(array)).toBe(3);
// });

// AAA pattern
it("should return the sum of an array of numbers", () => {
  // Arrange
  const arr = [1, 3, 2];
  const expectedResult = arr.reduce((acc, curr) => acc + curr, 0);
  // Action
  const result = add(arr);
  // Assertion
  expect(result).toBe(expectedResult);
});

it("should return NaN if we provide an array with non-numeric values", () => {
  // Arrange
  const arr = [1, " invalid", 2];
  //   const expectedResult = arr.reduce((acc, curr) => acc + curr, 0);
  // Action
  const result = add(arr);
  // Assertion
  expect(result).toBeNaN();
});

it("should return sum if we provide an array with numeric string", () => {
  // Arrange
  const arr = ["1", " 3", "2"];
  const expectedResult = arr.reduce((acc, curr) => acc + Number(curr), 0);
  // Action
  const result = add(arr);
  // Assertion
  expect(result).toBe(expectedResult);
});
