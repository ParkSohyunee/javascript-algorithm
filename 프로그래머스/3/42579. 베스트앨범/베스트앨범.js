// 처음에는 해시테이블에 key는 장르를, value는 재생횟수를 넣었는데,
// value를 [고유번호, 재생횟수] 배열형태로 만들어주어 고려대상을 쉽게 매칭할 수 있게됨
function solution(genres, plays) {
  const result = [];
  const genresHashTable = {};
  const playsHashTable = {};

  for (let i = 0; i < genres.length; i++) {
    if (!genresHashTable[genres[i]]) {
      genresHashTable[genres[i]] = [];
      playsHashTable[genres[i]] = 0;
    }
    genresHashTable[genres[i]].push([i, plays[i]]); // 장르별 고유번호와 플레이
    playsHashTable[genres[i]] += plays[i]; // 장르별 총 재생횟수 구하기
  }

  // 많이 재생된 장르 순으로 정렬
  const sortedGenre = Object.keys(playsHashTable).sort(
    (a, b) => playsHashTable[b] - playsHashTable[a]
  );

  // 장르안에서 가장 많이 재생된 노래 두개
  for (const genre of sortedGenre) {
    const sortedPlays = genresHashTable[genre].sort((a, b) =>
      a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]
    );
    sortedPlays.slice(0, 2).forEach((el) => {
      result.push(el[0]);
    });
  }
  return result;
}
