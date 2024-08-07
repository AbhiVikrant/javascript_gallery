// using for loop
function getSum(num) {
  let sum = 0;
  for (let i = num; i >= 1; i--) {
    sum += i;
  }
  return sum;
}
console.log(getSum(4));
// 2nd Method using a recursion

function sumTo(n) {
  if (n < 1) return;
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}
console.log(getSum(10000));

// using the arthimetic progression formula

function getSumUsingAP(n) {
  return (n * (n + 1)) / 2;
}
console.log(getSum(10000000000));
/*
P.S. Naturally, the formula is the fastest solution. It uses only 3 operations for any number n. The math helps!

The loop variant is the second in terms of speed. In both the recursive and the loop variant we sum the same numbers. But the recursion involves nested calls and execution stack management. That also takes resources, so it’s slower.

P.P.S. Some engines support the “tail call” optimization: if a recursive call is the very last one in the function, with no other calculations performed, then the outer function will not need to resume the execution, so the engine doesn’t need to remember its execution context. That removes the burden on memory. But if the JavaScript engine does not support tail call optimization (most of them don’t), there will be an error: maximum stack size exceeded, because there’s usually a limitation on the total stack size.

*/
