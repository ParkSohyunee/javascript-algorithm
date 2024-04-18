let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 가로, 세로 크기를 구함(N개 행, M개 열)
const [N, M] = input[0].split(" ").map((el) => +el);

input.shift();

// 방문한 노드 저장 배열 초기화
const visited = Array.from({ length: N }, () => new Array(M).fill(false));

function dfs(x, y, current) {
  if (x >= N || y >= M) return;
  if (visited[x][y] || input[x][y] !== current) return; // 이미 방문한 노드이거나, current와 다르면 리턴

  visited[x][y] = true;

  // '-'이면, 가로 탐색 -> 그 다음에는 [0,1], [0,2], [0,3], ...
  if (input[x][y] === "-") {
    dfs(x, y + 1, current);
  } else if (input[x][y] === "|") {
    // '+'이면, 세로 탐색 -> 그 다음에는 [0,0], [1,0], [2,0], ...
    dfs(x + 1, y, current);
  }
}

let count = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (visited[i][j]) continue;
    count++;
    dfs(i, j, input[i][j]);
  }
}

console.log(count);