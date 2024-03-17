function solution(number, limit, power) {
  let result = 0;

  // 1부터 number까지의 약수
  for (let i = 1; i <= number; i++) {
    let count = 0;

    for (let j = 1; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        count += 2;
      }

      if (i / j === j) {
        count -= 1;
      }
    }
    result += count > limit ? power : count;
  }
  return result;
}