// 1. 문제
// 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.
// 두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다.
// 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.
// 제한 사항: 1 ≤ n, m ≤ 100

// 2. 나의 풀이
function solution(ineq, eq, n, m) {
  for (let i = 0; i < 2; i++) {
    if (ineq == "<") {
      if (eq == "=") {
        if (n <= m) {
          return 1;
        } else {
          return 0;
        }
      } else if (eq == "!") {
        if (n < m) {
          return 1;
        } else {
          return 0;
        }
      }
    } else if (ineq == ">") {
      if (eq == "=") {
        if (n >= m) {
          return 1;
        } else {
          return 0;
        }
      } else if (eq == "!") {
        if (n > m) {
          return 1;
        } else {
          return 0;
        }
      }
    }
  }
}

// 3. 코드 리팩토링
function solution(ineq, eq, n, m) {
  if (ineq === ">" && eq === "=" && n >= m) return 1;
  if (ineq === ">" && eq === "!" && n > m) return 1;
  if (ineq === "<" && eq === "=" && n <= m) return 1;
  if (ineq === "<" && eq === "!" && n < m) return 1;
  else return 0;
}

// 4. 조건을 더 줄인 코드
function solution(ineq, eq, n, m) {
  if (eq === "=" && n === m) return 1;
  if (ineq === ">" && n > m) return 1;
  if (ineq === "<" && n < m) return 1;
  return 0;
}

// 5. ** 객체 내 함수로 만들어서 사용
const operations = {
  ">=": (n, m) => n >= m,
  ">!": (n, m) => n > m,
  "<=": (n, m) => n <= m,
  "<!": (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq]; // 예) operations[">="]
  return Number(op(n, m)); // true or false => Number => 0 or 1
}
