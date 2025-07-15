import { expect, test } from "vitest";
import { MissingNumber } from "./268-missing-number";

test("Should return missing value", () => {
  expect(MissingNumber.execute([3, 1, 0])).toEqual(2);

  expect(MissingNumber.execute([0, 1])).toEqual(2);

  expect(MissingNumber.execute([6, 0, 1, 3, 4, 2])).toEqual(5);

  expect(MissingNumber.execute([9,6,4,2,3,5,7,0,1])).toEqual(8);
});
