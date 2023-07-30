// 1. 문제
// 코니는 영어 단어가 적힌 카드 뭉치 두 개를 선물로 받았습니다.
// 코니는 다음과 같은 규칙으로 카드에 적힌 단어들을 사용해 원하는 순서의 단어 배열을 만들 수 있는지 알고 싶습니다.

// 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
// 한 번 사용한 카드는 다시 사용할 수 없습니다.
// 카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
// 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.

// 문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때,
// cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.

// 2-1. 풀이 시도(1) => 같은 카드 뭉치가 2번 연속으로 이어지는 상황 고려하지 못함
function solution(cards1, cards2, goal) {
  let comb = [];
  let result = "";

  goal.forEach((el) => {
    cards1.includes(el)
      ? comb.push(cards1.indexOf(el))
      : comb.push(cards2.indexOf(el));
  });

  console.log(comb);

  for (let i = 0; i < comb.length; i++) {
    if ((comb[i + 1] < comb[i]) | (comb[i + 1] - comb[i] > 1)) {
      result = "No";
      break;
    } else result = "Yes";
  }

  return console.log(result);
}

// 2-2. 풀이 시도(2) => 최종 제출 코드!!
function solution(cards1, cards2, goal) {
  let result = "Yes";

  while (goal.length) {
    let firstElement = goal.shift();
    if (cards1[0] === firstElement) {
      cards1.shift();
    } else if (cards2[0] === firstElement) {
      cards2.shift();
    } else {
      result = "No";
      break;
    }
  }

  return result;
}

// 3. 참고 풀이 => 내장 함수가 아닌 index 값 이용
function solution(cards1, cards2, goal) {
  let j = 0;
  let k = 0;

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[j]) j++;
    else if (goal[i] === cards2[k]) k++;
    else return "No";
  }
  return "Yes";
}

solution(
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
); // Yes

solution(
  ["i", "water", "drink"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
); // No

solution(
  ["you", "smart"],
  ["think", "more", "are", "be"],
  ["think", "more", "you", "are", "smart"]
); // Yes

solution(
  ["you", "smart"],
  ["think", "more", "I", "am"],
  ["think", "more", "I", "am", "smart"]
); // No

solution(["i", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]); // No
