// 1. 문제
// 정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 2. 풀이
function solution(start, end) {
  const answer = [];

  for (let i = start; i < end + 1; i++) {
    answer.push(i);
  }

  return answer;
}

// 3. Array.from() => 유사배열(객체)을 배열로 만들어주는 매소드
function solution(start, end) {
  return Array.from(Array(end - start + 1), (_, index) => index + 1); // [1,2,3,4,5,6,7,8]
}

function solution(start, end) {
  // v(value)는 예의상 놔두는 undefined 이고, 실제 i(index)로 배열을 만든다.
  return Array.from({ length: end - start + 1 }, (v, index) => index); // [0,1,2,3,4,5,6,7]
}

function solution(start, end) {
  // 문제 정답으로 활용
  return Array.from({ length: end - start + 1 }, () => start++); // () => start++  은 (_,index) => start + index
}
