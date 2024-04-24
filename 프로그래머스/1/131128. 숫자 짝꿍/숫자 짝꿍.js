function solution(X, Y) {
  // x, y의 공통 문자 찾기
  const xArray = new Array(10).fill(0);
  const yArray = new Array(10).fill(0);

  for (let i = 0; i < X.length; i++) {
    xArray[X[i]] += 1;
  }
  for (let i = 0; i < Y.length; i++) {
    yArray[Y[i]] += 1;
  }

  const commonNumber = [];

  for (let i = 0; i < yArray.length; i++) {
    if (yArray[i] > 0 && xArray[i] > 0) {
      let check = xArray[i] > yArray[i] ? yArray[i] : xArray[i];
      while (check) {
        commonNumber.push(i);
        check -= 1;
      }
    }
  }

  if (commonNumber.length === 0) {
    return "-1";
  }

  // 배열을 조합한 가장 큰 수 만들기
  const sorted = commonNumber.sort((a, b) => b - a);
  return sorted[0] === 0 ? "0" : sorted.join("");
}