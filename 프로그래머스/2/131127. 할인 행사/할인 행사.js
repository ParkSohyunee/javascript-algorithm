// sliding window

function solution(want, number, discount) {
  let result = 0;
  const wantList = new Map();

  for (let i = 0; i < want.length; i++) {
    wantList.set(want[i], number[i]);
  }

  // 처음 10개 데이터 계산
  for (let i = 0; i < 10; i++) {
    if (wantList.has(discount[i])) {
      wantList.set(discount[i], wantList.get(discount[i]) - 1);
    }
  }

  // 10개 데이터가 wantList에 매칭되는지
  let isPossible = [...wantList.values()].every((v) => v <= 0);
  if (isPossible) {
    result++;
  }

  for (let i = 1; i < discount.length - 9; i++) {
    const previous = discount[i - 1];
    const next = discount[i + 9];

    // 이전에 계산한 값은 원래대로 (수량 +1)
    if (wantList.has(previous)) {
      wantList.set(previous, wantList.get(previous) + 1);
    }
    // 새로운 값은 계산하기 (수량 -1)
    if (wantList.has(next)) {
      wantList.set(next, wantList.get(next) - 1);
    }

    // 10개 데이터가 wantList에 매칭되는지
    isPossible = [...wantList.values()].every((v) => v <= 0);
    if (isPossible) {
      result++;
    }
  }
  return result;
}