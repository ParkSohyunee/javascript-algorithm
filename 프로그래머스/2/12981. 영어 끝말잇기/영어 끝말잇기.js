// 리팩토링
// 1. 집합을 이용하기 위해 Set 객체 사용
// 2. 끝말잇기 규칙을 검사하기 위한 변수 최소화

function solution(n, words) {
  const checkedWord = new Set();
  let prevWord = words[0][0];

  for (let i = 0; i < words.length; i++) {
    let number = (i % n) + 1;
    let order = Math.ceil((i + 1) / n);

    let isPassWordLength = words[i].length > 1;

    if (
      !isPassWordLength ||
      checkedWord.has(words[i]) ||
      words[i][0] !== prevWord
    ) {
      return [number, order];
    }
    prevWord = words[i].slice(-1);
    checkedWord.add(words[i]);
  }
  return [0, 0];
}
