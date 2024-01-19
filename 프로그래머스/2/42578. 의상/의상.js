function solution(clothes) {
  // 1. 배열을 돌면서 의상 종류가 key, 개수가 value인 obj를 만든다.
  const myItem = {};

  clothes.forEach((item) => {
    !myItem[item[1]] ? (myItem[item[1]] = 1) : (myItem[item[1]] += 1);
  });

  // 2. value의 조합을 구한다.
  const matchedCount = Object.values(myItem).reduce(
    (acc, cur) => acc * (cur + 1),
    1
  );

  return matchedCount - 1;
}

// (참고)
// 가짓수는 n차식 계수들의 합이므로
// 옷종류가 3가지일때, (a+1)(b+1)(c+1) -1 이 총 조합수가 된다.