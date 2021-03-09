// 매개변수 기본값

const shoppingCart = [];
function addToCart(item, size = 1) {
  shoppingCart.push({ item: item, count: size });
}
addToCart("Apple");
addToCart("Orange", 2);

console.log(shoppingCart);

// ES5 코드
function addToCart(item, size) {
  size = typeof size !== "undefined" ? size : 1;
  shoppingCart.push({ item: item, count: size });
}

// -------------------------------------------------------------------------------------

// 나머지 매개변수

// ES5에서 arguments 활용
function workout(exercise1) {
  var todos = Array.prototype.slice.call(arguments, workout.length);
  console.log("Start from " + exercise1);
  console.log(todos.length + " more to do");
}
// ES6에서 나머지 매개변수 활용
function workout(exercise1, ...todos) {
  console.log("Start from " + exercise1);
  console.log(todos.length + " more to do");
  console.log("Args length: " + workout.length);
}

workout("Treadmill", "Pushup", "Spinning");
