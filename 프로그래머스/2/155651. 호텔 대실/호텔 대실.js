function calcHoursToMinutes(target) {
  const [hh, mm] = target.split(":");
  const minutes = Number(hh) * 60 + Number(mm);
  return minutes;
}

function solution(book_time) {
  let roomInfo = {};

  // 1. 시작 시간을 기준으로 오름차순으로 정렬
  book_time.sort((a, b) => {
    return calcHoursToMinutes(a[0]) - calcHoursToMinutes(b[0]);
  });

  // book_time을 돌면서
  // 시작 시간이 roomInfo value보다 크다면,
  // roomInfo value를 변경
  // 작다면, roomInfo key를 추가로 생성

  for (let i = 0; i < book_time.length; i++) {
    let emptyRoom = false;
    let availableRoom = [];

    const startTime = calcHoursToMinutes(book_time[i][0]);
    const endTime = calcHoursToMinutes(book_time[i][1]) + 10;

    for (let key in roomInfo) {
      const value = roomInfo[key];
      if (startTime >= value) {
        // 2. 빈 방이 여부 확인
        emptyRoom = true;
        availableRoom.push(value);
      }
    }

    // 3. 빈 방이 없으면 추가 방 생성
    if (!emptyRoom) {
      roomInfo[i + 1] = endTime;
    } else {
      // 4. 빈 방이 있으면 이용가능한 방 중 가장 빠른 시간으로 예약
      // console.log(`${i + 1}번 손님`, `이용가능한 방은: ${availableRoom}`);
      availableRoom.sort((a, b) => a - b);
      const availableKey = Object.keys(roomInfo).find(
        (key) => roomInfo[key] === availableRoom[0]
      );
      roomInfo[availableKey] = endTime;
    }
  }
  // console.log(roomInfo);
  // console.log(Object.keys(roomInfo).length);
  return Object.keys(roomInfo).length;
}