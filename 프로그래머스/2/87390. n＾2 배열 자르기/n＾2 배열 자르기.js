function solution(n, left, right) {
  let result = [];
  for (let i = left; i <= right; i++) {
    const x = parseInt(i / n) + 1;
    const y = (i % n) + 1;
    result.push(x > y ? x : y);
  }
  return result;
}