/**
 * @param {string} s
 * @return {string}
 */

// 리팩토링
// 1. 배열 대신 Set 자료구조 사용
// 2. 모음임을 판별하는 조건을 변수로 분리
// 3. start, end 둘다 모음일 때, 구조분해 할당으로 swap
// 4. 불필요한 조건문 제거 및 수정
function reverseVowels(s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const answer = s.split("");

  let start = 0;
  let end = s.length - 1;

  if (s.length <= 1) {
    return s;
  }

  while (start < end) {
    const isVowelStart = vowels.has(answer[start]);
    const isVowelEnd = vowels.has(answer[end]);

    if (isVowelStart && isVowelEnd) {
      [answer[start], answer[end]] = [answer[end], answer[start]];
      start++;
      end--;
    }
    if (!isVowelStart) {
      start++;
    }
    if (!isVowelEnd) {
      end--;
    }
  }
  return answer.join("");
}