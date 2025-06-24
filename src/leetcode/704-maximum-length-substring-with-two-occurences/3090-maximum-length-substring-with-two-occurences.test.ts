import { expect, test } from "vitest";
import { MaximumLengthSubstringWithTwoOccurences } from "./3090-maximum-length-substring-with-two-occurences";

const obj = new MaximumLengthSubstringWithTwoOccurences();

test("Should return maximum length substring with two occurrences", () => {
  const s1 = 'bcbbbcba';
  const s2 = 'aaaaaaaa';
  const s3 = '';

  expect(obj.execute(s1)).toEqual(4);

  expect(obj.execute(s2)).toEqual(2);

  expect(obj.execute(s3)).toEqual(0);
});
