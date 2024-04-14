function solution(number, k) {
  let result = [];

  for (let i = 0; i < number.length; i++) {
    let current = number[i]; // 현재 값 저장

    // 현재 값이 더 크고, count가 남아있다면 -> result에서 꺼낸 후, 현재 값 스택에 저장
    while (k > 0 && result.length > 0 && result[result.length - 1] < current) {
      result.pop();
      k--;
    }
    result.push(current);
  }
  result.splice(result.length - k, k);
  return result.join("");
}

// 오답 풀이 - count 조건 처리
// function solution(number, k) {
//   let index = 0; // result의 index
//   let result = "";

//   // k가 1이면, 가장 큰 수 리턴
//   if (k === 1) {
//     return [...number].sort((a, b) => b - a)[0];
//   }

//   let maxValue = 0;
//   let count = 0;

//   while (result.length < number.length - k) {
//     maxValue = Math.max(
//       ...number.slice(
//         count === 0 ? index : index + 1,
//         result.length - k + count + 1
//       )
//     );

//     result += maxValue;
//     index = number.indexOf(maxValue);

//     count += 1;
//   }
//   return result;
// }