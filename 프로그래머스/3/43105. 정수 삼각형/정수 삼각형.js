function solution(triangle) {
  const n = triangle.length; // 총 더해지는 횟수

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length - 1; j++) {
      const maxValue = Math.max(triangle[i][j], triangle[i][j + 1]);
      triangle[i - 1][j] += maxValue; // point: bottomp-up 방식으로 올라가면서 maxValue를 그 자리에 더해줌
    }
  }
  return triangle[0][0];
}