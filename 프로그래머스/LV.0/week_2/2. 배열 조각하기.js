// 1. 문제
// 정수 배열 arr와 query가 주어집니다.
// query를 순회하면서 다음 작업을 반복합니다.

// - 짝수 인덱스에서는 arr에서 query[i]번 인덱스를 제외하고 배열의 query[i]번 인덱스 뒷부분을 잘라서 버립니다.
// - 홀수 인덱스에서는 arr에서 query[i]번 인덱스는 제외하고 배열의 query[i]번 인덱스 앞부분을 잘라서 버립니다.

// 위 작업을 마친 후 남은 arr의 부분 배열을 return 하는 solution 함수를 완성해 주세요.

// 2. 풀이
function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      arr.splice(query[i] + 1);
    } else {
      arr.splice(0, query[i]);
    }
  }
  return arr;
}

// 3. slice와 splice의 차이
// slice
// - 원래 배열을 변경하지 않는다.

// splice
// - 원래 배열을 변경한다.

const test = [10, 9, 8, 7, 6, 5];

console.log(test.slice(2)); // [8, 7, 6, 5]
console.log(test.slice(2, 4)); // [8, 7]
console.log(test.slice()); // [10, 9, 8, 7, 6, 5]
console.log(test.slice(-2)); // [6, 5]
console.log(test); // 배열이 그대로 [10, 9, 8, 7, 6, 5]

// splice(start, deleteCount, item1, item2, itemN) ** delete"Count" => 즉, 삭제할 수
console.log(test.slice(2)); // 삭제 요소 [8, 7, 6, 5]
console.log(test.slice(2, 3)); // 삭제 요소 [8, 7, 6]
console.log(test.slice()); // 아무것도 삭제되지 않음
console.log(test.slice(-2)); // 삭제 요소 [6, 5]
console.log(test); // 삭제 후 남은 배열

// 4. reduce함수 사용
// reduce()메서드는 배열의 각 요소에 대해 사용자 제공 "리듀서" 콜백 함수를 순서대로 실행
// 이전 요소에 대한 계산의 반환 값을 전달
// 제공된 초기 값을 사용하고, 없다면 인덱스 0이 초기값이 되어 반복

function solution(arr, query) {
  return query.reduce(
    (answer, q, i) => (i % 2 === 0 ? answer.slice(0, q + 1) : result.slice(q)),
    arr
  );
}
