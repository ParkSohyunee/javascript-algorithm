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