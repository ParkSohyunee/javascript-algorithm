// 1. 문제
// 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서,
// 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.
// 예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다.
// 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.

// 2. 풀이
function solution(t, p) {
  let result = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    let str = t[i];
    let k = 1;

    while (k < p.length) {
      str = str + t[i + k];
      k++;
    }
    if (+str <= +p) result++; // Number(str) + Number(p)
  }
  return result;
}

solution("500220839878", "7"); // 8

// 3. 다른 풀이 방법
function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length); // while문 대신 slice로 그만큼 자르는 방법!! => 중복이 없이 자르기만 할 때 참고할것.
    if (+p >= +value) count++;
  }
  return count;
}
