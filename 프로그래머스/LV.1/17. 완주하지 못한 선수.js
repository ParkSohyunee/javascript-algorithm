/*
1. 문제
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

<제한사항>
- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.
*/

/* 2-1. 해시 풀이 */
function solution(participant, completion) {
  const hash = {};

  for (let i = 0; i < participant.length; i++) {
    hash[participant[i]] =
      hash[participant[i]] === undefined ? 1 : hash[participant[i]] + 1;
  }
  for (let j = 0; j < completion.length; j++) {
    hash[completion[j]] = hash[completion[j]] - 1;
  }
  const hashKeyArray = Object.keys(hash);
  for (let k = 0; k < hashKeyArray.length; k++) {
    if (hash[hashKeyArray[k]] !== 0) return hashKeyArray[k];
  }
}

/* 2-2. sort 풀이 */
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  return participant[participant.length - 1];
}

// prettier-ignore
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])); // "mislav"
// prettier-ignore
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"],["josipa", "filipa", "marina", "nikola"])); // ""vinko""
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
