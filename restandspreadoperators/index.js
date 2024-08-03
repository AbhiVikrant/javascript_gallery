console.log(Math.max(1, -9.88, 77, 9, 374, 5775));
let user = {
  name: "John",
  isAdmin: false
};
let userTask = {
  action: "validation"
};
let dest = {};
Object.assign(dest, user, userTask);
console.log(dest);

function sum(...args) {
  let sum = 0;
  for (let arg of args) {
    console.log(args[arg]);
    sum += arg;
  }
  return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

function showName() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}
showName("Abhi", "Anku");
showName("Anku");
// same showName fun using arrow

let show = () => {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log("Hello Abhishek");
};
show("Abhi", "Anku");
show("Anku");

function findMax(...args) {
  return Math.max(...args);
}
// function not
let s = [1, 3, 4, 5, 6, 8];
let d = [865, 6, 7777, 7];
console.log(findMax(1, ...s, ...d));

// merging

console.log(2, 3, 55, 66754, ...s, 667, ...d);

let str = "Hello";
let arrStr = [...str];
console.log(typeof arrStr, arrStr);

let dd = [...d];
console.log(typeof dd, dd);
console.log(JSON.stringify(d) === JSON.stringify(dd)); // true

console.log(d === d); //true
console.log(d === dd); //false
