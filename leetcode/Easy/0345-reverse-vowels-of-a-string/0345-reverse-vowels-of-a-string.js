/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  const answer = s.split("");

  let start = 0;
  let end = s.length - 1;

  if (s.length <= 1) {
    return s;
  }

  while (end >= start) {
    if (
      vowels.includes(s[start].toLowerCase()) &&
      vowels.includes(s[end].toLowerCase())
    ) {
      answer[start] = s[end];
      answer[end] = s[start];
      start++;
      end--;
    } else if (vowels.includes(s[start].toLowerCase())) {
      end--;
    } else if (vowels.includes(s[end].toLowerCase())) {
      start++;
    } else {
      start++;
      end--;
    }
  }
  return answer.join("");
}