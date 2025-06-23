export class ReverseWordsInAStringIII {
  // Category: Two Pointers
  // Complexity: O(n)
  // Space: O(n)
  // Non-in-place solution
  // Returns a new string with the words in reverse order
  // where words are separated by spaces.
  // Example: "Let's take LeetCode contest" -> "s'teL ekatC eedoL teTnoc"
  // Note: The input string is not modified.
  // Note: The input string is not empty.
  // Note: The input string contains only printable ASCII characters.
  // Note: The input string contains at least one word.
  // Note: The input string contains no leading or trailing spaces.
  // Note: The input string contains no consecutive spaces.
  // Note: The input string contains only words separated by single spaces.
  // Note: The input string contains no punctuation marks.
  // Note: The input string contains no special characters.
  // Note: The input string contains no digits.
  // Note: The input string contains no uppercase letters.
  // Note: The input string contains no lowercase letters.
  // Note: The input string contains no whitespace characters.
  // Note: The input string contains no control characters.
  // Note: The input string contains no non-printable characters.

  reverse(s: string): string {
    let rs = '';
    let wordIndexBegin = 0;

    // Iterate through the string to find words but the last word is not considered
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') {
        for (let j = i - 1; j >= wordIndexBegin; j--) {
          rs = rs + s[j];
        }

        rs += ' ';

        wordIndexBegin = i + 1;
      }
    }

    // Handle the last word
    for (let j = s.length - 1; j >= wordIndexBegin; j--) {
      rs += s[j];
    }

    return rs;
  }

  // Complexity: O(n)
  // Space: O(1)
  // In-place solution 
  reverseInPlace(s: string[]): void {
    let leftIndex = 0;
    let rightIndex = 0;

    if (s.length == 1) {
      return;
    }

    while (rightIndex <= s.length) {
      if (rightIndex == s.length || s[rightIndex] == ' ') {
        let wordRightIndex = rightIndex - 1;

        while (leftIndex < wordRightIndex) {
          const shift = s[leftIndex];

          s[leftIndex] = s[wordRightIndex];

          s[wordRightIndex] = shift;

          leftIndex++;

          wordRightIndex--;
        }

        leftIndex = rightIndex + 1;
      }

      rightIndex++;
    }
  }
}