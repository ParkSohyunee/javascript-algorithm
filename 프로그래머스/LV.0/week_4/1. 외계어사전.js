// 1. 문제
// PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다.
// 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다.
// spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1,
// 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

// 2. 풀이
function solution(spell, dic) {
  const orderWordsArray = [];
  const word = spell.sort().join(""); // spell 을 합쳐서 알파벳순 정렬

  dic.forEach((el) => {
    let words = [...el].sort().join(""); // dic의 각각을 알파벳순으로 정렬
    orderWordsArray.push(words);
  });
  return orderWordsArray.includes(word) ? 1 : 2; // spell 이 dic에 있는지 비교
}

solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]); // 2
solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]); // 1
