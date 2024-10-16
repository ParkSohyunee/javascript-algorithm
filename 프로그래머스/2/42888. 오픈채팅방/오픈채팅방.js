function solution(record) {
  const result = [];
  const hashTable = {};

  for (let el of record) {
    const uid = el.split(" ")[1];
    const nickname = el.split(" ")[2];

    if (nickname) {
      hashTable[uid] = nickname;
    }
  }

  for (let i = 0; i < record.length; i++) {
    const [action, uid] = record[i].split(" ");
    let text = "";

    switch (action) {
      case "Enter":
        text = `${hashTable[uid]}님이 들어왔습니다.`;
        break;
      case "Leave":
        text = `${hashTable[uid]}님이 나갔습니다.`;
        break;
      case "Change":
        continue;
    }
    result.push(text);
  }
  return result;
}