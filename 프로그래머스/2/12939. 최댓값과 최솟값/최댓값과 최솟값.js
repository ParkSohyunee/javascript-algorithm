function solution(s) {
  const array = s.split(" ");
  array.sort((a, b) => a - b);

  return [array[0], array[array.length - 1]].join(" ");
}