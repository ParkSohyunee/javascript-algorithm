/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  const searchedVowels = [];

  // s를 돌면서, 모음을 발견하면, 모음 배열에 저장
  for (i = s.length - 1; i >= 0; i--) {
    if (vowels.includes(s[i].toLowerCase())) {
      searchedVowels.push(s[i]);
    }
  }

  // s를 돌면서, 모음이었던 인덱스 자리에 모음 배열을 역순으로 넣기
  const arrayString = s.split("");

  for (i = 0; i < arrayString.length; i++) {
    if (vowels.includes(arrayString[i].toLowerCase())) {
      arrayString[i] = searchedVowels.shift();
    }
  }
  return arrayString.join("");
}
