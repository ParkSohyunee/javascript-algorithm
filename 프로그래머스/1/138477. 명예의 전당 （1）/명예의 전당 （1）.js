function solution(k, score) {
  let topScores = [score[0]];
  const result = [score[0]];

  for (let i = 1; i < score.length; i++) {
    // 1. k일 이전에는 명예전당에 다 올리고 제일 최하위 구하기
    if (i < k) {
      topScores.push(score[i]);
      topScores = topScores.sort((a, b) => b - a);
      result.push(topScores[topScores.length - 1]);
      continue;
    }

    // 2-1. k일 다음부터는 score[i] 점수가 topScores의 k번째 점수보다 높으면 올라가고
    topScores = topScores.sort((a, b) => b - a);
    let prevMinScore = topScores[topScores.length - 1];

    if (prevMinScore < score[i]) {
      topScores.splice(-1, 1, score[i]);
      result.push(Math.min(...topScores));
    } else {
      // 2-2. 낮으면 내려감
      result.push(prevMinScore);
    }
  }
  return result;
}