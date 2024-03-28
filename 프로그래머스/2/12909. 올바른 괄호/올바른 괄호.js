function solution(s) {
  let sum = 1;

  if (s[0] === ")") {
    return false;
  }

  for (let i = 1; i < s.length; i++) {
    sum += s[i] === "(" ? 1 : -1;

    if (sum < 0) {
      return false;
    }
  }

  return sum === 0 ? true : false;
}