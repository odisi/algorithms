import { expect, test } from "vitest";
import { ReverseWordsInAStringIII } from "./557-reverse-words-in-a-string-iii";

const obj = new ReverseWordsInAStringIII();

test("Should return inverted string", () => {
  expect(obj.reverse("h")).toBe("h");

  expect(obj.reverse("hello")).toBe("olleh");

  console.time('X')
  expect(obj.reverse("hello world")).toBe("olleh dlrow");
  console.timeEnd('X')
});

test("Should invert string in place", () => {
  const arr1 = ["h"];
  const arr2 = ["h", "e", "l", "l", "o"];
  const arr3 = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];

  obj.reverseInPlace(arr1)

  expect(arr1).toEqual(["h"]);

  obj.reverseInPlace(arr2)

  expect(arr2).toEqual(["o", "l", "l", "e", "h"]);

  console.time('Z')
  obj.reverseInPlace(arr3)
  console.timeEnd('Z')

  expect(arr3).toEqual(["o", "l", "l", "e", "h", " ", "d", "l", "r", "o", "w"]);
});