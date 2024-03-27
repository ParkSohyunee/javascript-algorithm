function solution(n) {
  let count = 0;

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    let initial = i;
    let sum = 0;

    while (sum < n) {
      sum += initial;

      if (sum === n) {
        count += 1;
        break;
      } else {
        initial += 1;
      }
    }
  }
  return count + 1; // 자기 자신 더하기
}