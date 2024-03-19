function solution(n) {
  const result = new Array(n + 1).fill(true);
  result[0] = false;
  result[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (result[i]) {
      for (let j = i * i; j <= n; j += i) {
        result[j] = false;
      }
    }
  }
  return result.filter((el) => el).length;
}