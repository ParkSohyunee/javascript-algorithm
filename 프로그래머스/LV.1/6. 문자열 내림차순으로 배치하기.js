// 1. 문제
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 2. 풀이
function solution(s) {
  let upperWord = "";
  let lowerWord = "";

  for (let i = 0; i < s.length; i++) {
    s[i].toUpperCase() === s[i] ? (upperWord += s[i]) : (lowerWord += s[i]);
  }

  return [...(lowerWord + upperWord)].sort().reverse().join("");
}

// 3. 리팩토링
// sort()함수는 유니코드 기준으로 문자열을 정렬하므로, 기본적으로 대문자가 소문자보다 앞에 오도록 정렬된다.
function solution(s) {
  return [...s].sort().reverse().join("");
}

solution("Zbcdefg"); // "gfedcbZ"
