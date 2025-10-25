import { expect, test } from "vitest";
import { add } from "./math";

test("adds 1 + 2 to equal 3", () => {
  const array = [1, 2];
  expect(add(array)).toBe(3);
});
