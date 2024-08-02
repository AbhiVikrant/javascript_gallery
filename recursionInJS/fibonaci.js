// print the fibonacci series

// using loop

function toPrintFibSeries(n) {
  let n1 = 1,
    n2 = 1,
    nextTerm;

  console.log("Fibonacci Series:");

  for (let i = 1; i <= n; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}
toPrintFibSeries(7);

console.log("Recursion result");

// print using recursion

function getFibonacci(num) {
  if (num < 2) return num;
  return getFibonacci(num - 1) + getFibonacci(num - 2);
}

function displayFibonacci(n) {
  if (n <= 0) console.log("Enter +ve num");
  for (let i = 1; i <= n; i++) {
    console.log(getFibonacci(i));
  }
}

displayFibonacci(7);
console.log("77th fib no: ", getFibonacci(7));
// clg 77 takes more time because it evaluates double and triple times a value so follow dynamic bottom up approach

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib(7));
