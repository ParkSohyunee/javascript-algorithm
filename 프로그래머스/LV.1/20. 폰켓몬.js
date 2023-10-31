/**
 * [문제] - 폰켓몬
 * N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수
 * N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법
 *
 * [제한 사항]
 * nums는 폰켓몬의 종류 번호가 담긴 1차원 배열
 * nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수
 * 폰켓몬의 종류 번호는 1 이상 200,000 이하의 자연수
 * 가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return
 */

function solution(nums) {
  const getPoketmon = nums.length / 2;

  // 배열을 hash 자료구조로 만든다.
  const map = new Map();
  for (let num of nums) {
    map.set(num, map.get(num) ? map.get(num) + 1 : 1);
  }

  // hash의 key 개수 vs getPoketmon의 개수
  return map.size > getPoketmon ? getPoketmon : map.size;
}

/**
 * Test Case
 */
solution1([3, 1, 2, 3]); // 2
solution1([3, 3, 3, 2, 2, 4]); // 3
solution1([3, 3, 3, 2, 2, 2]); // 2

/**
 * 다른풀이
 * Set을 이용한 배열의 중복 제거
 */
function solution1(nums) {
  const getPoketmon = nums.length / 2;

  const arr = [...new Set(nums)];
  const arrCount = arr.length;

  return arrCount > getPoketmon ? getPoketmon : arrCount;
}
