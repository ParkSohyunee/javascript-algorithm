function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return parseInt(s) === Number(s) ? true : false;
  }
  return false;
}