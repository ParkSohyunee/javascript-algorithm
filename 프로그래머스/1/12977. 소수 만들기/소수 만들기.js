// 조합 배열을 구하는 함수
function combinations(nums, n) {
  const result = [];

  if (n === 1) {
    return nums.map((el) => [el]);
  }

  nums.forEach((cur, index, origin) => {
    const rest = origin.slice(index + 1);
    const comb = combinations(rest, n - 1);
    const attachArray = comb.map((el) => [cur, ...el]);

    result.push(...attachArray);
  });

  return result;
}

// 숫자가 소수인지 판별하는 함수
function isPrime(num) {
  let flag = true;

  if (num === 2) {
    return flag;
  }

  // 제곱근까지만 반복
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

function solution(nums) {
  // 조합 배열 각각의 요소의 합
  const sum = combinations(nums, 3).map((comb) =>
    comb.reduce((acc, cur) => acc + cur, 0)
  );

  return sum.filter((n) => isPrime(n)).length;
}