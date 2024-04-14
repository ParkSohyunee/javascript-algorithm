function solution(s) {
  let answer = "";
  let index = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i];
      index = 0; // index 초기화
      continue;
    }

    if (index % 2 === 0) {
      answer += s[i].toUpperCase();
      index++;
    } else {
      answer += s[i].toLowerCase();
      index++;
    }
  }

  return answer;
}