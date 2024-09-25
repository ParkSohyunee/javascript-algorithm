// 리팩토링한 부분
// 1. challenger 배열 초기화로 도전자 수 구하기
// 2. 스테이지별 실패율 계산 로직 수정
function solution(N, stages) {
  // 스테이지별 도전지 수
  const challenger = new Array(N + 2).fill(0); // index가 0부터 시작하고, N+1 단계까지 갈 수 있으므로
  for (const stage of stages) {
    challenger[stage] += 1;
  }

  // 각 스테이지의 실패율 구하기
  // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
  const failArr = [];
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      // 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0
      failArr.push([i, 0]);
      continue;
    }
    failArr.push([i, challenger[i] / total]);
    total = total - challenger[i]; // 다음 실패율을 계산하기 위한 총 플레이어 수
  }
  // 내림차순으로 정렬
  const result = failArr.sort((a, b) => b[1] - a[1]);

  return result.map((el) => Number(el[0]));
}