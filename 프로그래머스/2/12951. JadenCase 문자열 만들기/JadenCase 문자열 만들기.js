function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      answer += s[i].toUpperCase();
      continue;
    }

    if (s[i] !== " " && s[i - 1] === " ") {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}