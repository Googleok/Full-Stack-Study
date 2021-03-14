const fruits = [
  { name: "apple", price: 100 },
  { name: "orange", price: 80 },
  { name: "banana", price: 120 },
];

// 변형1
// 인자가 없을 때 빈 괄호 세트()가 필요하다.
var countFruits = () => fruits.length;
// ES5 코드
var countFruits = function () {
  return fruits.length;
};

// 변형2
// 하나의 인자가 있을 때 괄호는 생략할 수 있다.
// 표현식의 값은 함수의 반환 값이다.
fruits.filter((fruits) => fruits.price > 100);
// ES5 코드
fruits.filter(function (fruit) {
  return fruit.price > 100;
});

// 변형3
// 함수가 객체 리터럴을 반환할 때 괄호로 감싸야 한다.
var inventory = fruits.map((fruit) => ({ name: fruit.name, storage: 1 }));
// ES5 코드
var inventory = fruits.map(function (fruit) {
  return {
    name: fruit.name,
    storage: 1,
  };
});

// 변형4
// 화살표 함수가 구문들로 이뤄진 본문을 가지고 있고 결과를 반환해야 할 때 return 구문이 필요하다.
var inventory = fruits.map((fruit) => {
  console.log("Checking " + fruit.name + " storage");
  return { name: fruit.name, storage: 1 };
});
// ES5 코드
var inventory = fruits.map(function (fruit) {
  console.log("Checking " + fruit.name + " storage");
  return { name: fruit.name, storage: 1 };
});

// 자신의 this,를 가지지 않는다.

var shoppingCart = {
  items: ["Apple", "Orange"],
  inventory: { Apple: 1, Orange: 0 },
  checkout() {
    this.items.forEach((item) => {
      if (!this.inventory[item]) {
        console.log("Item " + item + " has sold out.");
      }
    });
  },
};

shoppingCart.checkout();

// ES5 코드
var shoppingCart = {
  items: ["Apple", "Orange"],
  inventory: { Apple: 1, Orange: 0 },
  checkout() {
    // 컨텍스트를 재할당하고 forEach에 전달한 콜백에서
    // 참조할 수 있도록 클로저를 활용한다.
    /**
     *  클로저는 반환된 내부함수가 자신이 선언됐을 때의 환경(Lexical environment)인
     *  스코프를 기억하여 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도
     *  그 환경(스코프)에 접근할 수 있는 함수를 말한다.
     */
    var that = this;
    this.items.forEach(function (item) {
      if (!that.inventory[item]) {
        console.log("Item " + item + " has sold out.");
      }
    });
  },
};

shoppingCart.checkout();

// --------------------------------------------------------------------------------------------------

var name = "Unknown";
var greeting = () => {
  console.log("Hi I'm " + this.name);
};
greeting.call({ name: "Sunny" });
greeting.apply({ name: "Ted" });
var newGreeting = greeting.bind({ name: "James" });
newGreeting();

// --------------------------------------------------------------------------------------------------

var shoppingCart = {
  items: ["Apple", "Orange"],
  inventory: { Apple: 1, Orange: 0 },
  checkout: () => {
    this.items.forEach((item) => {
      if (!this.inventory[item]) {
        console.log("Item " + item + " has sold out.");
      }
    });
  },
};

// shoppingCart.checkout();

// --------------------------------------------------------------------------------------------------

class User {
  constructor(name) {
    this.name = name;
  }
}
User.prototype.swim = () => {
  console.log(this.name + " is swimming");
};
var user = new User();
console.log(user.swim());

// --------------------------------------------------------------------------------------------------

const WorkoutPlan = () => {};
// Uncaught TypeError: WorkoutPlan is not a constructor 출력
let workoutPlan = new WorkoutPlan();
console.log(WorkoutPlan.prototype);
