function solution(sizes) {
  const sortedSizes = sizes.filter((el) => el.sort((a, b) => a - b));

  let maxWidth;
  let maxHeight;

  for (let i = 0; i < sortedSizes.length; i++) {
    if (i === 0) {
      maxWidth = sortedSizes[i][0];
      maxHeight = sortedSizes[i][1];
    }
    maxWidth = maxWidth > sortedSizes[i][0] ? maxWidth : sortedSizes[i][0];
    maxHeight = maxHeight > sortedSizes[i][1] ? maxHeight : sortedSizes[i][1];
  }

  return maxWidth * maxHeight;
}