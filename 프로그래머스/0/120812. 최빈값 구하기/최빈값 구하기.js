function solution(array) {
  if (array.length === 1) {
    return array[0];
  }

  const maxNumber = Math.max(...array);
  const indexArray = Array.from({ length: maxNumber + 1 }, () => 0);

  for (let i = 0; i < array.length; i++) {
    indexArray[array[i]] += 1;
  }

  let index;
  let max;
  let duplicated = false;

  for (let i = 0; i < indexArray.length; i++) {
    if (i === 0) {
      max = indexArray[i];
      index = i;
      continue;
    }
    if (indexArray[i] > max) {
      max = indexArray[i];
      index = i;
      duplicated = false;
    } else if (indexArray[i] === max) {
      duplicated = true;
    }
  }
  return duplicated ? -1 : index;
}