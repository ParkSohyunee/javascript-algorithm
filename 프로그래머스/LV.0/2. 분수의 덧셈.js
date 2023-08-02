// 1. 문제
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 2. 풀이
function solution(numer1, denom1, numer2, denom2) {
  let result = [];
  let top = numer1 * denom2 + numer2 * denom1;
  let bottom = denom1 * denom2;

  for (let i = bottom; i >= 2; i--) {
    if (top % i === 0 && bottom % i === 0) {
      top = top / i;
      bottom = bottom / i;
    }
  }
  result.push(top, bottom);

  return result;
}

solution(1, 2, 3, 4); // [5, 4]
solution(9, 2, 1, 3); // [29, 6]
solution(4, 4, 4, 4); // [2, 1]
solution(40, 2, 500, 50); // [30, 1]
