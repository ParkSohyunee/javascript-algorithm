// 반복문
function solution(k, m, score) {
  let maxPrice = 0;

  score.sort((a, b) => b - a);

  // score 중 m개 배열을 몇개 만들 수 있는지
  const count = Math.floor(score.length / m);

  if (m > score.length) {
    return maxPrice;
  }

  for (let i = 0; i < count; i++) {
    const start = i === 0 ? i : i * m;

    // 나열한 배열을 m개로 나눠서 그 안에서 최소 값을 찾아내서 * m
    maxPrice += Math.min(...score.slice(start, start + m)) * m;
  }

  return maxPrice;
}

// 재귀
// function sol_memo(m, score, memo) {
//   // 메모이제이션 키 생성
//   const memoKey = score.join(",") + `_${m}`;

//   // 이미 계산된 결과가 있는지 확인
//   if (memo[memoKey] !== undefined) {
//     console.log(memo[memoKey]);
//     return memo[memoKey];
//   }

//   if (m > score.length) {
//     return 0;
//   }

//   const maxPrice =
//     Math.min(...score.slice(0, m)) * m + sol_memo(m, score.slice(m), memo);

//   // 계산된 결과를 메모에 저장
//   memo[memoKey] = maxPrice;

//   return maxPrice;
// }

// function solution(k, m, score) {
//   const memo = {};

//   score.sort((a, b) => b - a);

//   return sol_memo(m, score, memo);
// }