function solution(A, B) {
  const arrayString = [...A];

  if (A === B) {
    return 0;
  }

  for (let i = 1; i < arrayString.length; i++) {
    const lastChar = arrayString.pop();
    arrayString.unshift(lastChar);

    if (arrayString.join("") === B) {
      return i;
    }
  }
  return -1;
}
