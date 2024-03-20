function solution(s, n) {
  // 알파벳 소문자 배열
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 97)
  ).join("");

  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let position = alphabet.indexOf(s[i].toLowerCase()) + n;

    if (position > 25) {
      position -= 26;
    }

    if (s[i] === " ") {
      answer += " ";
    } else if (alphabet.includes(s[i])) {
      answer += alphabet[position];
    } else {
      answer += alphabet[position].toUpperCase();
    }
  }

  return answer;
}