function dp_memo(n, cache) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  }

  if (n < cache.length) {
    return cache[n];
  }

  cache[n] = dp_memo(n - 1, cache) + dp_memo(n - 2, cache);
  return cache[n] % 1234567;
}

function solution(n) {
  const dp_cache = [];
  return dp_memo(n, dp_cache);
}