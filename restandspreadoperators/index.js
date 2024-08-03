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
