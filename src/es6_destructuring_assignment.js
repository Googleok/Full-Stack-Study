// object destructuring
let user = { name: "Sunny", interests: ["Traveling", "Swimming"] };
let { name, interests, tasks = [] } = user;
console.log(name);
console.log(interests);
console.log(tasks);

let { name: firstName } = user;
console.log(firstName);

// array destructuring
let [first, second] = ["Traveling", "Swimming", "Shopping"];
console.log(first);
console.log(second);

let [, , third, fourth = ""] = ["Traveling", "Swimming", "Shopping"];
console.log(third);
console.log(fourth);

// overlap destructuring
let user = { name: "Sunny", interests: ["Traveling", "Swimming"] };
let {
  interests: [, second],
} = user;
console.log(second);
console.log(interests);

const fruits = [
  { name: "Apple", price: 100 },
  { name: "Orange", price: 80 },
];
let [, { name: secondFruitName }] = fruits;
console.log(secondFruitName);
