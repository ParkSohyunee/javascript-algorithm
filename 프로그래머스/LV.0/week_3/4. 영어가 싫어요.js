// 1. 문제

// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
// 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

// 2. 풀이

function solution(numbers) {
  // 숫자 배열 만들기
  const numberArray = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < numberArray.length; i++) {
    if (numbers.includes(numberArray[i])) {
      numbers = numbers.replaceAll(numberArray[i], i); // 해당 문자를 해당 인덱스(i)로 대체
    } else {
      continue;
    }
  }
  return Number(numbers);
}

solution("onetwothreefourfivesixseveneightnine"); // 123456789

// (참고) numberArray 객체로 만들기
const numberObj = { ...numberArray };
console.log(numberObj);

// {
//   '0': 'zero',
//   '1': 'one',
//   '2': 'two',
//   '3': 'three',
//   '4': 'four',
//   '5': 'five',
//   '6': 'six',
//   '7': 'seven',
//   '8': 'eight',
//   '9': 'nine'
// }
