/**
 * prototype은 다른 객체와 property를 공유하기 위한 도구이다.
 * 여기서 공유란 참조
 */

function User(name, interests) {
  this.name = name;
  this.interests = interests;
}
User.prototype.greeting = function () {
  console.log("Hi, I'm " + this.name + ".");
};

// console.log(User.constructor === Function);
// console.log(User.prototype.constructor === User);
// var user = new User();
// console.log(user.__proto__ === User.prototype);

function TeamMember(name, interests, tasks) {
  User.call(this, name, interests);
  this.tasks = tasks;
}
TeamMember.prototype = Object.create(User.prototype);
TeamMember.prototype.greeting = function () {
  console.log("I'm " + this.name + ". Welcome to the team!");
};
TeamMember.prototype.work = function () {
  console.log("I'm working on " + this.tasks.length + " tasks");
};

// console.log(User.prototype === TeamMember.prototype);
// console.log(User.prototype.constructor === TeamMember.prototype.constructor);

var member = new TeamMember(
  "Sunny",
  ["Traveling"],
  ["Buy three tickets", "Book a hotel"]
);
member.greeting();
member.work();

console.log(member instanceof TeamMember);
console.log(member instanceof User);
console.log(member instanceof Object);

User.prototype.eat = function () {
  console.log("What will I have for lunch?");
};
member.eat();

// 최상위 객체에 메소드 추가
Object.prototype.move = function () {
  console.log("Every object can move now");
};
member.move();
var alien = {};
alien.move();
User.move();

console.log(member.__proto__ === TeamMember.prototype);
console.log(TeamMember.prototype.__proto__ === User.prototype);
console.log(User.prototype.__proto__ === Object.prototype);

// User.prototype.__proto__ = null;
// member.move();
// console.log(member instanceof Object);

console.log(TeamMember.prototype.isPrototypeOf(member));
console.log(member.hasOwnProperty("name"));
console.log(member.hasOwnProperty("move"));
