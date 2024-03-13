function solution(a, b) {
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  if (a === 1) {
    const day = b % 7;
    return days[day];
  }

  const sumDays = months.slice(0, a - 1).reduce((acc, cur) => acc + cur, 0);
  const day = (sumDays + b) % 7;

  return days[day];
}