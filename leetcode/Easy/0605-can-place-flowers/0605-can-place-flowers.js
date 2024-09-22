/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
function canPlaceFlowers(flowerbed, n) {
  let plantedFlower = 0;

  if (n === 0) {
    return true;
  }

  if (flowerbed.length === 1) {
    return flowerbed[0] === 0; // n이 1인 경우
  }

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      // 처음 자리
      if (i === 0 && flowerbed[i + 1] === 0) {
        plantedFlower++;
        flowerbed[i] = 1;
      }
      // 마지막 자리
      else if (i === flowerbed.length - 1 && flowerbed[i - 1] === 0) {
        plantedFlower++;
        flowerbed[i] = 1;
      }
      // 끝자리
      else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        plantedFlower++;
        flowerbed[i] = 1;
      }

      if (plantedFlower >= n) {
        return true;
      }
    }
  }
  return plantedFlower >= n;
}