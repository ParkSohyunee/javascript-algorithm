// 1. 문제
// 정수 l과 r이 주어졌을 때,
// l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를
// 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
// 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

// 2. 풀이
// 테스트는 통과했지만 일부 코드에서 시간 초과 (6개)
function solution(l, r) {
  let answer = [];
  let empty = [-1];

  for (let i = l; i <= r; i++) {
    let a = i.toString();
    for (let b = 0; b <= a.length; b++) {
      if (a[0] !== "5") {
        continue;
      }
      if (a[b] === "5" || a[b] === "0") {
        answer.push(a); // 배열의 끝에 값 추가, 대신 변수에 담으면 배열의 length가 출력된다.
      }
    }
    answer = [...new Set(answer)]; // 배열의 중복제거
  }
  let bbb = answer.filter((el) => !el.match(/[^50]+/)); // 조건에 맞는 배열만 새로 return
  bbb = bbb.map(Number); // 문자로 이루어진 배열을 숫자의 배열로 만들어줌
  if (bbb.length !== 0) {
    return bbb;
  }
  return empty;
}

// 고민 방법
function solution(l, r) {
  answer = [];

  for (let i = l; i <= r; i++) {
    let a = i.toString();
    let count = 0;
    for (let b = 0; b < a.length; b++) {
      if (a[b] === "5" || a[b] === "0") {
        count = count + 1;
      }
      if (count === a.length) {
        answer.push();
      }
    }
  }
  answer;
}
