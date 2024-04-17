let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

// 최종 제출
input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);
console.log(input.join("\n"));

// (참고) 런타임 에러 - 어렵게 생각한 방법
// const sortedMap = {};

// // 반복문을 돌면서 key, value 형태로 넣기
// for (let i = 0; i < input.length; i++) {
//   const splitedInput = input[i].split(" ");

//   if (Object.keys(sortedMap).includes(splitedInput[0])) {
//     sortedMap[splitedInput[0]] = [
//       ...sortedMap[splitedInput[0]],
//       splitedInput[1],
//     ];
//   } else {
//     sortedMap[splitedInput[0]] = [splitedInput[1]];
//   }
// }

// const sortedKeys = Object.keys(sortedMap)
//   .map((el) => Number(el))
//   .sort((a, b) => a - b);

// // 반복문을 돌면서 key에 해당하는 value 출력하기
// for (let i = 0; i < sortedKeys.length; i++) {
//   if (sortedMap[sortedKeys[i]].length > 1) {
//     for (let j = 0; j < sortedMap[sortedKeys[i]].length; j++) {
//       const result = [sortedKeys[i], sortedMap[sortedKeys[i]][j]];
//       console.log(result.join(" "));
//     }
//   } else {
//     const result = [sortedKeys[i], ...sortedMap[sortedKeys[i]]];
//     console.log(result.join(" "));
//   }
// }