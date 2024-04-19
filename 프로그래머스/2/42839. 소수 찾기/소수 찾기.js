function permutate(arr, n) {
  const result = [];

  if (n === 1) {
    return arr.map((el) => [el]);
  }

  arr.forEach((cur, index, origin) => {
    const restArray = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutation = permutate(restArray, n - 1);
    const attachedArray = permutation.map((el) => [cur, ...el]);

    result.push(...attachedArray);
  });
  return result;
}

function isPrime(num) {
  let isPrime = true;

  if (num === 0 || num === 1) {
    return false;
  }

  // 제곱근까지
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime; // 소수인 숫자 반환
}

function solution(numbers) {
  let permutationArray = []; // 순열 배열

  // 문자열 numbers 배열
  const numbersArr = numbers.split("");

  // arr로 만들 수 있는 순열 -> 한개부터 ~ numbers 길이까지 경우의 수 구하기
  for (let i = 1; i <= numbersArr.length; i++) {
    const result = permutate(numbersArr, i);
    permutationArray = [...permutationArray, ...result];
  }

  // 문자를 합쳐서 하나의 숫자로 만들기
  permutationArray = [...new Set(permutationArray.map((el) => +el.join("")))];

  // 소수인지 판별
  return permutationArray.filter((num) => isPrime(num)).length;
}