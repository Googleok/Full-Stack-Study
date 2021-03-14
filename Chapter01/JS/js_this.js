function User(name) {
  console.log("I'm in \"" + this.constructor.name + '" context.');
  this.name = name;
  this.speak = function () {
    console.log(
      this.name + ' is speaking from "' + this.constructor.name + '" context.'
    );
    var drink = function () {
      console.log('Drinking in "' + this.constructor.name + '"');
    };
    drink();
  };
  function ask() {
    console.log('Asking from "' + this.constructor.name + '"   context.');
    console.log('Who am I? "' + this.name + '"');
  }
  // ask();
  // ask.call(this);
  ask.bind(this)();
}

var name = "Unknown";
var user = new User("Ted");
user.speak();

console.log(Function.prototype.isPrototypeOf(user.speak));
user.speak.hasOwnProperty("apply");
user.speak.__proto__.hasOwnProperty("apply");

/**
 * 함수 호출 방법 네가지
 * 생성자 함수 호출: new User()
 * 직접 함수 호출: ask()
 * 메소드 호출: user.speak()
 * 컨텍스트 변경 호출: ask.call(this) 또는 ask.apply(this)
 */
