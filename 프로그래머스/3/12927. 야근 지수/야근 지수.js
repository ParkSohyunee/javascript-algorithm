function solution(n, works) {
  // 총 작업량이 n보다 작거나 같으면 모든 작업량을 처리할 수 있으므로 0을 리턴
  if (works.reduce((acc, cur) => acc + cur) <= n) {
    return 0;
  }

  let sorted = works.sort((a, b) => a - b);

  while (n > 0) {
    const max = sorted[sorted.length - 1];

    for (let i = sorted.length - 1; i >= 0; i--) {
      // 최대 작업량보다 크거나 같으면, 작업량 1만큼 차감, 그만큼 주어진 시간(n)도 차감
      if (max <= sorted[i]) {
        sorted[i]--;
        n--;
      }
      // 남은 시간 n이 0보다 작으면 while문 종료
      if (n <= 0) {
        break;
      }
    }
  }
  return sorted.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
}