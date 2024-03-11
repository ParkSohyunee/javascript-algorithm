function solution(strings, n) {
  const indexArray = [];

  for (let i = 0; i < strings.length; i++) {
    indexArray.push(strings[i][n]);
  }
  const sortedIndexArray = [...new Set(indexArray.sort())];

  const obj = {};
  for (let i = 0; i < sortedIndexArray.length; i++) {
    strings.forEach((el) => {
      if (el[n] === sortedIndexArray[i]) {
        if (Object.keys(obj).includes(sortedIndexArray[i])) {
          obj[sortedIndexArray[i]] = [...obj[sortedIndexArray[i]], el].sort();
        } else {
          obj[sortedIndexArray[i]] = [el];
        }
      }
    });
  }
  return Object.values(obj).flatMap((el) => el);
}