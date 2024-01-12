const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const array = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  // input을 돌면서 알파벳 위치를 파악
  const index = alphabet.indexOf(input[i]);
  // 파악한 위치에 따라 array에 +1씩 증가시키기
  array[index] += 1;
}
// 공백을 포함한 문자열로 출력하기
console.log(array.join(" "));