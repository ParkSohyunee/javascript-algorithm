// 리팩토링
// 1. 객체 대신 key, value를 반환해주는 array.entries() 메소드 사용
// Array.entries() - returns a new array iterator object that contains the key/value pairs for each index in the array.
// 2. 수포자들의 점수를 저장할 배열을 미리 만들어 놓아서 점수를 얻을때마다 해당 인덱스 값에서 증가 시켜주기 (scores[j] += 1) - 기존엔 배열에 push 메소드 사용

const patterns = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  const scores = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      // 문제의 번호(i)를 해당 패턴의 길이로 나눈 나머지가 패턴의 index
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  const maxScore = Math.max(...scores); // 수포자들이 얻은 점수의 최대값
  const result = [];

  scores.forEach((element, index) => {
    if (element === maxScore) {
      result.push(index + 1); // 누가 많이 맞췄는지 index를 구하기 위해
    }
  });
  return result.length === 1 ? result : result.sort((a, b) => a - b);
}
