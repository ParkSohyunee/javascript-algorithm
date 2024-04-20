// 순열로 풀기
function permutate(arr, n) {
  const result = [];

  if (n === 1) {
    return arr.map((el) => [el]);
  }

  arr.forEach((cur, index, origin) => {
    const restArray = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutateArray = permutate(restArray, n - 1);
    const attachedArray = permutateArray.map((el) => [cur, ...el]);

    result.push(...attachedArray);
  });
  return result;
}

function solution(k, dungeons) {
  let maxCount = 0;

  // 던전의 순열
  const result = permutate(dungeons, dungeons.length);

  // 배열을 돌면서, 반복되는 카운트가 제일 큰 경우
  for (let i = 0; i < result.length; i++) {
    let current = k;
    let count = 0;

    for (let j = 0; j < result[i].length; j++) {
      if (current < result[i][j][0]) break;

      current -= result[i][j][1];
      count++;
    }
    if (maxCount < count) {
      maxCount = count;
    }
  }
  return maxCount;
}

// (실패) 최소 피로도 - 소모 피로도의 값으로 구하는 방법
// function solution(k, dungeons) {
//   let restArray = dungeons.slice();
//   let current = k;
//   let count = 0;

//   while (restArray.length) {
//     let max;
//     let cal;
//     let index;

//     count++; // 탐험 횟수

//     for (let i = 0; i < restArray.length; i++) {
//       if (current < restArray[i][0]) continue;

//       // 최소 피로도 - 소모 피로도의 값
//       cal = restArray[i][0] - restArray[i][1];

//       // 값이 제일 큰 경우를 먼저 탐험하기
//       if (i === 0) {
//         max = cal;
//         index = i;
//       }
//       if (cal > max) {
//         max = cal;
//         index = i;
//       }
//     }
//     // restArray 배열이 같으면 탈출
//     if (index === undefined) {
//       count--;
//       break;
//     }

//     // 선택한 던전 탐험 후 체력
//     current -= restArray[index][1];
//     if (current === 0) break;

//     // 선택한 던전을 제외한 나머지 던전 배열
//     restArray = [...restArray.slice(0, index), ...restArray.slice(index + 1)];
//   }
//   return count;
// }