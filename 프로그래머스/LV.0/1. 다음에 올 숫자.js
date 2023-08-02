// 1. 문제
// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때,
// 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

// 2. 풀이
function solution(common) {
  let a = common[1] - common[0];
  let b = Math.floor(common[1] / common[0]);

  if (common[2] - common[1] === common[1] - common[0]) {
    // 등차수열
    return common[common.length - 1] + a;
  } else {
    // 등비수열
    return common[common.length - 1] * b;
  }
}

solution([2, 4, 8]); // 16
solution([1, 2, 3, 4]); // 5
