const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

// 피보나치 수열의 n번째 값을 구하는 함수
function fibo(n) {
  const result = [0, 1];

  if (n < 2) {
    return 1;
  }

  for (let i = 2; i < n + 1; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[n];
}

console.log(fibo(Number(input)));