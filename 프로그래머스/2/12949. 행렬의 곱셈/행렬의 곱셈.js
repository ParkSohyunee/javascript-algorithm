function solution(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    let mergeSum = Array.from({ length: arr2[0].length }).fill(0);
    // arr2의 열의 길이만큼 반복
    for (let j = 0; j < arr2[0].length; j++) {
      // 결과값은 arr1의 행(m) x arr2의 열(n)이 되어야 하므로
      if (j < arr2[0].length) {
        let sum = 0;
        for (let k = 0; k < arr2.length; k++) {
          //   console.log(arr1[i][k], arr2[k][j]); // 1 3 , 4 5 , 1 4 , 4 6...
          sum += arr1[i][k] * arr2[k][j]; // arr1은 행이 고정 열이 이동, arr2는 열이 고정 행이 이동
        }
        mergeSum[j] = sum;
      }
    }
    result.push(mergeSum);
  }
  return result;
}