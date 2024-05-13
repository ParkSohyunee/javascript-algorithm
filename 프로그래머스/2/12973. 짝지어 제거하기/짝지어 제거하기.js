function solution(s) {
  const array = [];

  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      array.push(s[i]);
      continue;
    }

    if (array[array.length - 1] === s[i]) {
      array.pop();
    } else {
      array.push(s[i]);
    }
  }
  return array.length === 0 ? 1 : 0;
}