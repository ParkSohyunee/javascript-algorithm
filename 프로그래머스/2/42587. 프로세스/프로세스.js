function solution(priorities, location) {
  const map = new Map();
  priorities.map((el, index) => map.set(index, el));

  const indexArray = [...map];
  const result = [];

  while (indexArray.length > 0) {
    const current = indexArray.shift();

    // current 보다 큰 수가 있는지 판별
    const isMax = indexArray.some((el) => el[1] > current[1]);

    if (isMax) {
      // 다시 큐에 넣기
      indexArray.push(current);
    } else {
      // 최대값이면 새로운 배열에 넣기
      result.push(current);
    }
  }
  // location과 일치하는 index return
  for (let i = 0; i < result.length; i++) {
    if (result[i][0] === location) {
      return i + 1;
    }
  }
}