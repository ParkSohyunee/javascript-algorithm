// 1. 문제
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를
// return 하도록 solution 함수를 완성해주세요.

// 2. 풀이
// 2-1. 새로운 배열 생성
const fullNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function solution(numbers) {
  let result = 0;

  for (let i = 0; i < fullNumbers.length; i++) {
    if (!numbers.sort().includes(fullNumbers[i])) result += i;
  }
  return result;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]); // 14

// 2-2. 반복문만 가지고 풀기
function solution(numbers) {
  let result = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) result += i;
  }
  return result;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]); // 14

// 총 합(45)를 가지고 reduce로 구한 총합에서 뺴는 방법도 있지만, 총 합을 알기 어려운 경우도 있으므로 2-2방법이 효율적.
