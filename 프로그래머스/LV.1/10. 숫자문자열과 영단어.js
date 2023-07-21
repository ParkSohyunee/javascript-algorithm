// 1. 문제
// 네오와 프로도가 숫자놀이를 하고 있습니다.
// 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.
// s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// ** 제한시간 안내
// 정확성 테스트 : 10초

// 2. 풀이
const word = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  let result = s;

  word.reduce(
    (acc, cur, i) =>
      s.includes(cur) ? (result = result.replaceAll(cur, i)) : "",
    0
  );
  return +result;
}

solution("2three45sixseven"); // 234567
solution("one4seveneight"); // 1478

// 3. 참고 할 만한 풀이 => 'split'과 'join'을 활용
function solution(s) {
  let result = s;

  for (let i = 0; i < word.length; i++) {
    let arr = result.split(word[i]); // * 숫자로 바뀌고 있는 result 문자가 누적되야 하므로 split 대상은 result
    result = arr.join(i);
  }
  return +result;
}
