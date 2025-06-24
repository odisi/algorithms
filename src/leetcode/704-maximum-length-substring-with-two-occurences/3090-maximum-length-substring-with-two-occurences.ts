export class MaximumLengthSubstringWithTwoOccurences {
  // Category: sliding-window
  // Complexity: O(n)
  // Space: O(1)

  execute(s: string): number {
    let leftIndex = 0;

    let rightIndex = 0;

    let rs = 0;

    let letterCount = new Map<string, number>();

    while (rightIndex < s.length) {
      if (letterCount.has(s[rightIndex])) {
        letterCount.set(s[rightIndex], letterCount.get(s[rightIndex])! + 1);

        while (letterCount.get(s[rightIndex])! > 2) {
          letterCount.set(s[leftIndex], letterCount.get(s[leftIndex])! - 1);

          leftIndex++;
        }
      } else {
        letterCount.set(s[rightIndex], 1);
      }

      rs = Math.max(rs, rightIndex - leftIndex + 1);

      rightIndex++;
    }

    return rs;
  }
}
