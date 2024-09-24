function solution(N, stages) {
  const answer = [];
  const failedArr = [];

  stages.sort((a, b) => a - b);

  // 1. stages 단계를 반복하면서
  for (let i = 1; i <= N; i++) {
    let start = stages.indexOf(i);
    let last = stages.lastIndexOf(i);
    let percentage;

    // 스테이지에 도달한 유저가 없거나, 스테이지를 넘어선 유저만 있을 때
    if (start === -1) {
      percentage = 0;
      failedArr.push([i, percentage]);
      continue;
    }

    // 2-1. N과 같은 개수와
    // 2-2. N과 같거나 큰 개수를 구하여
    const stayUser = last - start + 1;
    const total = stages.length - start;

    // 3. 실패율을 계산하고 저장 (실패율은 스테이지순으로 저장)
    percentage = stayUser / total;
    failedArr.push([i, percentage]);
  }
  // 4. 실패율이 놓은 스테이지부터 내림차순으로 정렬
  const sortedFailedArr = failedArr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < sortedFailedArr.length; i++) {
    answer.push(sortedFailedArr[i][0]);
  }
  return answer;
}