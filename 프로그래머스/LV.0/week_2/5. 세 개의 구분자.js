// 1. 문제
// 임의의 문자열이 주어졌을 때 문자 "a", "b", "c"를 구분자로 사용해 문자열을 나누고자 합니다.
// 예를 들어 주어진 문자열이 "baconlettucetomato"라면 나눠진 문자열 목록은 ["onlettu", "etom", "to"] 가 됩니다.
// 문자열 myStr이 주어졌을 때 위 예시와 같이 "a", "b", "c"를 사용해
// 나눠진 문자열을 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
// 단, 두 구분자 사이에 다른 문자가 없을 경우에는 아무것도 저장하지 않으며,
// return할 배열이 빈 배열이라면 ["EMPTY"]를 return 합니다.

// 2. 풀이 => 시간 초과
function solution(myStr) {
  for (let i = 0; i < myStr.length; i++) {
    if (myStr[i] === "a" || myStr[i] === "b" || myStr[i] === "c") {
      myStr = myStr.replace(myStr[i], " ");
    }
  }
  let answer = myStr.split(" ").filter((el) => el !== "");
  return answer.length !== 0 ? answer : ["EMPTY"];
}

// 3. 풀이 => 통과
function solution(myStr) {
  myStr = myStr.replaceAll("a", " ").replaceAll("b", " ").replaceAll("c", " ");

  let answer = myStr.split(" ").filter((el) => el !== "");
  return answer.length !== 0 ? answer : ["EMPTY"];
}

// 4. 정규식 이용해서 풀기
function solution(myStr) {
  const regx = /[a-c]/g; // replaceAll 은 정규표현식과 사용할때 g플래그(global)을 항상 같이 써야 타입에러가 없음

  // prettier-ignore
  const result = myStr.replaceAll(regx, " ").split(" ").filter((el) => el !== "");
  return result.length !== 0 ? answer : ["EMPTY"];
}
