function solution(sizes) {
  let maxWidth;
  let maxHeight;

  for (let i = 0; i < sizes.length; i++) {
    // 각 요소의 최대값, 최소값 찾기
    const max = Math.max(sizes[i][0], sizes[i][1]);
    const min = Math.min(sizes[i][0], sizes[i][1]);

    maxWidth = maxWidth > max ? maxWidth : max;
    maxHeight = maxHeight > min ? maxHeight : min;
  }

  return maxWidth * maxHeight;
}

// 처음 풀이
// function solution(sizes) {
//   const sortedSizes = sizes.filter((el) => el.sort((a, b) => a - b));

//   let maxWidth;
//   let maxHeight;

//   for (let i = 0; i < sortedSizes.length; i++) {
//     if (i === 0) {
//       maxWidth = sortedSizes[i][0];
//       maxHeight = sortedSizes[i][1];
//     }
//     maxWidth = maxWidth > sortedSizes[i][0] ? maxWidth : sortedSizes[i][0];
//     maxHeight = maxHeight > sortedSizes[i][1] ? maxHeight : sortedSizes[i][1];
//   }

//   return maxWidth * maxHeight;
// }
