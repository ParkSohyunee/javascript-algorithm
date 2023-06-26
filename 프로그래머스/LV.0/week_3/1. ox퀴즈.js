// 1. 문제
// 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다.
// 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// 2. 풀이

// 2-1.
function solution(quiz) {
  let answer = [];
  let result = "";

  for (let i = 0; i < quiz.length; i++) {
    let cal = quiz[i].split(" ");
    let op = cal[1];
    let x = Number(cal[0]);
    let y = Number(cal[2]);
    let z = Number(cal[4]);

    if (op === "-") {
      if (x - y === z) {
        result = "O";
      } else {
        result = "X";
      }
    }
    if (op === "+") {
      if (x + y === z) {
        result = "O";
      } else {
        result = "X";
      }
    }

    answer.push(result);
  }
  return answer;
}

// 2-2. 변수할당 리팩토링 => 구조분해 할당
function solution(quiz) {
  let answer = [];

  quiz.map((el) => {
    const [x, op, y, , z] = el.split(" "); // 포인트
    let sum = 0; // 포인트

    if (op === "-") {
      sum = Number(x) - Number(y);
    } else {
      sum = Number(x) + Number(y);
    }
    sum === Number(z) ? answer.push("O") : answer.push("X");
  });
  return answer;
}
