function solution(numbers) {
  const result = [];

  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(result)].sort((a, b) => a - b);
}

// 예전 풀이
// function solution(numbers) {
//   let dupArr = [];

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       dupArr.push(numbers[i] + numbers[j]);
//     }
//   }

//   const result = dupArr.filter((num, index) => {
//     return dupArr.indexOf(num) === index;
//   });

//   return result.sort((a, b) => a - b);
// }