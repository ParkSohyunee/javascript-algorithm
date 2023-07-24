// 1. 문제
// 정수 배열 numbers가 주어집니다.
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는
// 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 2. 풀이
function solution(numbers) {
  let dupArr = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      dupArr.push(numbers[i] + numbers[j]);
    }
  }

  const result = dupArr.filter((num, index) => {
    return dupArr.indexOf(num) === index;
  });

  return result.sort((a, b) => a - b);
}

solution([2, 1, 3, 4, 1]); // [ 2, 3, 4, 5, 6, 7 ]
solution([5, 0, 2, 7]); // 	[2, 5, 7, 9, 12]

// 3. 참고 - 중복제거 방법
// (1) filter + indexOf를 이용 (2번 풀이 방법)

// (2) Set obj 이용 -> Set을 활용하여 새로운 객체를 만들고(중복제거), 다시 배열로 만듬
// [...Set(dupArr)]

// (3) forEach + includes 이용
// let uniqueArr = [];
// dupArr.forEach((el) => {
//   if (!uniqueArr.includes(el)) {
//     uniqueArr.push(el);
//   }
// });
