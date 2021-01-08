//.includes()

const pets = ["cat", "goat", "rabbit"];
let numbers = [1, 3, 4, 2.4, 2, 2];

pets.includes("dog");
numbers.includes("3");

//exponential
// if (array.indexOf(input) > -1)
const square = (x) => x ** 2;
const cube = (y) => y ** 3;

function fibo() {
  var first, second, add;
  for (var i = 0; i < 4000; i++) {
    if (i === 0) {
      first = 1;
      second = 2;
    }
    add = first + second;
    first = second;
    second = add;
  }
  alert(add);
}
fibo();

//ES 8
//padStart() padEnd();
"Turtle".padStart(10);
"John".padEnd(23);

const fun = (a, b, c) => console.log(a);

// Object.values
// Object.entries
// Object.keys

//   console.log(key, obj[key], index);
// });
// Object.keys(obj).forEach((key, index) => {

// Object.values(obj).forEach((value) => {
//   console.log(value);
// });

// Object.entries(obj).forEach((value) => {
//   console.log(value);
// });

// Object.entries(obj).map((value) => {
//   return value[1] + value[0].replace("username", "");
// });

//sort an object
const obj = {
  username0: "santa",
  username1: "assa",
  username2: "john",
};
const sortedObj = Object.values(obj)
  .sort()
.reduce((result, item) => {
    result[getKeyByValue(obj, item)] = item;
     return result;
  }, {});

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

console.log(getKeyByValue(obj, "santa"));
console.log(sortedObj);

let obj2 = {
  red: 3,
  blue: 2,
  ayellow: 21
};
//sort based on keys
const stack = Object.keys(obj2)
  .sort()
  .reduce(
    (acc, key) => ({
      ...acc,
      [key]: obj2[key],
    }),
    {}
  );
console.log(stack);

let object = [
  { age: 4, name: "xbar" },
  { age: 6, name: "me" },
  { age: 1, name: "I" },
];

let sortedObject = object.sort((a, b) => {
  if (a.name < b.name) return -1; // sorted by name
  if (a.name > b.name) return 1;
  return 0;
});
console.log(sortedObject);

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";
// it should look like this:
// ("     ||<- Start line");
// ("       🐢");
// ("       🐇");
turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

// #2) What happens when you run turtle.trim().padEnd(8, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, "=");

// #3) Get the below object to go from:
// let obj = {
//   my: "name",
//   is: "Rudolf",
//   the: "reindeer",
// };
// // to this:
// obj = "my name is Rudolf the reindeer";

// Object.entries(obj)
//   .map((value) => value[0] + " " + value[1])
//   .join(" ");

Object.entries(obj)
  .map((value) => value.join(" "))
  .join(" ");

//Debugging

const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, array) => {
  console.log("array", array);
  console.log("acc", accumulator);
  //debugger
  return accumulator.concat(array);
}, []);

const flattenedo = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, array) => accumulator.concat(array), []);

//Call Stack Overflow
// function foo() {
//   foo();
// }

//foo();

//Asynchronous JS
console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
console.log(3);

//setTimeout(), 2000
//Web API
//callback()
//Callback queue

//Event loop
