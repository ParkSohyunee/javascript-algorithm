// 1. 문제
// 문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.

// 2. 풀이
const readline = require("readline"); // 모듈을 불러오기 : require("모듈이름")
const rl = readline.createInterface({
  // eadline 인터페이스 객체 만들기
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  // on 매서드는 이벤트가 발생할 때 실행할 동작을 지정
  input = [line]; // input.push(line)
  rl.close(); // 입력 종료 => 종료가 없으면 무한대로 입력 받음
}).on("close", () => {
  str = input[0];
  console.log(str);
  process.exit(); // 실행 종료
});

// 3. 공부
// readline 모듈은 JavaScript에 내장된 모듈로 스트링을 한줄씩 입출력 처리할 수 있게 도와줌
// "line" 이벤트는 사용자가 콘솔에 입력(줄바꿈, 엔터, 리턴 입력 시)할 때 발생
// "close" 이벤트는 readline 종료를 제어하는 이벤트
