// memoization

// function fib_memo(n, cache) {
//   if (n < 3) {
//     return 1;
//   }

//   if (n <= cache.length) {
//     return cache[n];
//   }

//   cache[n] = fib_memo(n - 1, cache) + fib_memo(n - 2, cache);

//   return cache[n] % 1234567;
// }

// function solution(n) {
//   const fib_cache = [];
//   return fib_memo(n, fib_cache);
// }

function solution(n) {
  const fibo = [0, 1, 1];

  for (let i = 3; i < n + 1; i++) {
    fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1234567;
  }

  return fibo[n];
}