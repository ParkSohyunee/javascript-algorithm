function solution(keymap, targets) {
  // 알파벳 자리에 해당하는 count를 저장할 index 배열 생성(order)
  const order = Array.from({ length: 26 }, () => -1);
  const alphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index)
  );

  // keymap을 돌면서 각 대문자마다 가장 먼저 등장하는 순서 순으로 order 배열에 넣기
  keymap.forEach((keys) => {
    for (let i = 0; i < keys.length; i++) {
      let index = alphabet.indexOf(keys[i]);
      if (order[index] > i || order[index] === -1) {
        order[index] = i + 1;
      }
    }
  });

  const result = [];

  // targets을 돌면서 알파벳에 해당하는 order 값 더하기
  for (let i = 0; i < targets.length; i++) {
    let count = 0;
    for (let k = 0; k < targets[i].length; k++) {
      let index = alphabet.indexOf(targets[i][k]);

      if (order[index] === -1) {
        count = -1;
        break;
      } else {
        count += order[index];
      }
    }
    result.push(count);
  }
  return result;
}