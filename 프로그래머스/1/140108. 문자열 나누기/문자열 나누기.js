function solution(s) {
  let result = 0;
  let target = s;

  while (target.length > 0) {
    if (target.length === 1) {
      return result + 1;
    }

    let x = target[0];
    let firstCount = 1;
    let otherCount = 0;

    for (let i = 1; i < target.length; i++) {
      if (target[i] === x) {
        firstCount += 1;
      } else {
        otherCount += 1;
      }
      if (firstCount === otherCount) {
        result += 1;
        target = target.slice(i + 1);
        break;
      }
      if (i === target.length - 1 && firstCount !== otherCount) {
        return result + 1;
      }
    }
  }
  return result;
}