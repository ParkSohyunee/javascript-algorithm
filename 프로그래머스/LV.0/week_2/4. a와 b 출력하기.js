// 1. a와 b 출력하기
// 정수 a와 b가 주어집니다.
// 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.

// 2. 풀이
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdin,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ");
  rl.close();
}).on("close", () => {
  console.log(`a = ${Number(input[0])}\nb = ${Number(input[1])}`);
  process.exit();
});
