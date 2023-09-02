/**
 * [문제] 체육복 - 탐욕법(Greedy)
 * n: 전체 학생수 (2 <= n <= 30, 중복x)
 * lost: 체육복을 도난당한 학생들의 번호가 담긴 배열
 * reserve: 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
 * Q. 체육수업을 들을 수 있는 학생의 최댓값을 return
 *
 * [제한 사항]
 * 여벌 체육복을 가져온 학생이 체육복을 도난당할 수 있음, 이 때
 * 남은 체육복이 하나이기에 다른 학생에게 체육복을 빌려줄 수 없음! (즉, 본인이 입어야함)
 */

function solution(n, lost, reserve) {
  lost.sort((a, b) => b - a);
  reserve.sort((a, b) => b - a);

  const newLostArray = lost.filter((num) => !reserve.includes(num));
  const newReserveArray = reserve.filter((num) => !lost.includes(num));
  let matchReserve = [...newReserveArray];

  const duplicateCount = lost.length - newLostArray.length;
  let reserveCount = 0;

  // 1. lost 배열의 각 번호의 앞,뒤와 일치하면 +1
  for (let i = 0; i < newLostArray.length; i++) {
    for (let j = 0; j < matchReserve.length; j++) {
      if (
        newLostArray[i] + 1 === matchReserve[j] ||
        newLostArray[i] - 1 === matchReserve[j]
      ) {
        reserveCount += 1;
        matchReserve = matchReserve.filter(
          (el) => matchReserve.indexOf(el) > j
        );
      }
    }
  }
  // 2. 전체 학생수(n) - 도난당한 수(lost) + 빌려준 수(count) + 중복수(잃어버렸는데 본인이 여벌옷이 있는 사람)
  // console.log(n - lost.length + reserveCount + duplicateCount);
  return n - lost.length + reserveCount + duplicateCount;
}

/**
 * Test Case
 */
solution(5, [2, 4], [1, 3, 5]); // 5
solution(5, [2, 4], [3]); // 4
solution(3, [3], [1]); // 2
solution(5, [4, 5], [3, 4]); // 4
solution(5, [3, 4], [1, 2, 5]); // 5
solution(7, [7, 4, 3, 5, 2, 1], [6, 5]); // 3
solution(5, [5, 3, 1], [2, 4]); // 4
solution(5, [2, 3, 4], [3, 4, 5]); // 4
solution(13, [13, 6, 1], [11, 9, 8, 7]); // 11
solution(10, [3, 4, 7, 9], [2, 3, 8]); // 8

/**
 * [문제 해결 과정]
 * 1. lost와 reserve 배열을 내림차순으로 sort => 최적해를 찾을 수 있음
 * 2. lost와 reserve 배열에서 중복된 번호를 제외한 배열을 재 생성 => 제한사항 조건을 해결하기 위해
 * 3. nesReserveArray 배열과 동일한 matchReserve 배열 생성 => 반복문을 돌면서 새로운 배열을 생성해줘야 하기 때문(4-2번 과정)
 * 4. newLostArray를 순회하면서 각 번호의 +1, -1을 한 번호가 matchReserve에 있는지 체크
 * 4-1. 있으면, count +=1
 * 4-2. 있으면, matchReserve에 매치된 인덱스 이후의 인덱스의 배열로 재생성!! => 배열 길이가 줄어들고 이후엔 반복이 줄어듬
 * 5. 총 학생수 - 체육복 잃어버린 수 - 빌려준 수 - 중복 수(잃어버린 사람 = 여벌가진 사람)
 *
 * [결론]
 * Greedy는 최적해를 찾기위해 최적으로 선택해야 하는 방법을 결정
 * => 선택의 경로를 어떻게 최적으로 할 수 있을까에 대한 고민 (정렬, 배열, 길이 등)
 */
