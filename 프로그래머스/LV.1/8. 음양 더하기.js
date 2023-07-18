// 1. 문제
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 2. 풀이
function solution(absolutes, signs) {
  let result = 0;
  signs.reduce(
    (arr, cur, i) =>
      cur ? (result += absolutes[i]) : (result -= absolutes[i]),
    signs[0]
  );
  console.log(result);
}

solution([4, 7, 12], [true, false, true]); // 9
solution([1, 2, 3], [false, false, true]); // 0

// 3. 참고 풀이 => 더하고 빼고는 -1을 공통으로 활용할 수 있다는 생각!!
// *** reduce가 for문에 비해서 가독성과 성능이 안좋을 수도 있다.
// *** 그러므로 reduce를 사용하려면 가독성이 좋게 작성( what is a 'good' code not just 'cool'.), 경우에따라서 reduce와 for문을 적절히 사용할 것
function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => acc + (cur * signs[i] ? 1 : -1), 0);
}
