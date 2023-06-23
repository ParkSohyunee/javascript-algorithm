// 1. 문제
// 영어 알파벳으로 이루어진 문자열 str이 주어집니다.
// 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

// 2, 풀이
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = [line];
  rl.close();
}).on("close", () => {
  str = input[0];
  result = [];

  str.split("").forEach((el) => {
    if (el.match(/[A-Z]/g)) {
      result.push(el.toLowerCase());
    }
    if (el.match(/[a-z]/g)) {
      result.push(el.toUpperCase());
    }
  });
  console.log(result.join(""));
});

// 3-1. 스프레드 문법 적용
rl.on("line", (line) => {
  input = [...line]; // a b c D F G
}).on("close", () => {
  console.log(
    input.map((char) =>
      (/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()).join("")
    )
  );
});

// 3-2. 스프레드 문법 적용
rl.on("line", (line) => {
  input = [line];
}).on("close", () => {
  str = input[0];
  console.log(
    [...str].map((char) =>
      (/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()).join("")
    )
  );
});

// * 스프레드 문법은 개별요소로 분리한다.
console.log(...[1, 2, 3]); // 1 2 3
console.log(..."123"); // 1 2 3
