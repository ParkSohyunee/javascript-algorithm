// 1. 문제

// 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다.
// 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다.
// 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를
// n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

// 2. 풀이

function solution(numlist, n) {
  let newArray = [];
  let answer = [];

  for (let i = 0; i < numlist.length; i++) {
    let distance = Math.pow(n - numlist[i], 2); // n과의 거리를 제곱
    newArray.push([distance, numlist[i]]); // 이중 배열 만들기
  }
  newArray.sort((a, b) => a[0] - b[0] || b[1] - a[1]); // distance를 오름차순, num을 내림차순으로 정렬
  newArray.map((el) => answer.push(el[1]));
  return answer;
}

solution([1, 2, 3, 4, 5, 6], 4); // [ 4, 5, 3, 6, 2, 1 ]

// 3. 공부

// (1) point
// - sort의 콜백함수 조건문 작성 부분을 연산자로 연결해서 활용 가능 => 정렬의 정렬
// - 절대값 비교는 거리(A)와 원래 숫자(B) => [A,B] 이렇게 새 배열로 만들어 사용하면서 비교 => A, B 둘다 비교해야 하므로

// (2) 보통 절댓값을 구하는 문제는 Math.abs() 내장함수를 사용
