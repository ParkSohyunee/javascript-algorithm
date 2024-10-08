function solution(n) {
  let count = 0;

  for (let i = 0; i < n.length; i++) {
    const stack = [];
    let isTrue = true; // 모든 짝이 맞는지를 확인 여부를 판별

    for (let j = 0; j < n.length; j++) {
      const currentEl = n[(i + j) % n.length]; // 괄호가 회전했다고 가정했을 때 해당하는 문자를 알기위한 원래 위치 계산(n에서의 위치)

      if (currentEl === "[" || currentEl === "(" || currentEl === "{") {
        stack.push(currentEl);
      } else {
        if (stack.length === 0) {
          isTrue = false;
          break;
        }

        // 괄호의 짝이 맞는지 확인
        let lastEl = "";
        switch (stack[stack.length - 1]) {
          case "[":
            lastEl = "]";
            break;
          case "{":
            lastEl = "}";
            break;
          case "(":
            lastEl = ")";
            break;
        }
        if (currentEl === lastEl) {
          stack.pop();
        } else {
          isTrue = false;
          break;
        }
      }
    }
    if (isTrue && stack.length === 0) {
      count++;
    }
  }
  return count;
}
