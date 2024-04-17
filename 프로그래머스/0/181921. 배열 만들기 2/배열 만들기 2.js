function solution(l, r) {
  const result = [];

  for (let i = l; i <= r; i++) {
    if (i > 555555) break;
    if (i % 5 !== 0) continue; // 5로 나눈 나머지가 0인 숫자 필터

    let str = String(i);

    if ([...str].every((index) => index === "5" || index === "0")) {
      result.push(Number(i));
    }
  }
  return result.length !== 0 ? result : [-1];
}