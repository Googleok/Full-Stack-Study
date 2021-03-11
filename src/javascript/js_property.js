function User(name, department) {
  var _department = department;
  var _name = name;
  Object.defineProperty(this, "name", {
    value: _name,
    writable: true,
    enumerable: true,
    configurable: false,
  });
  Object.defineProperty(this, "department", {
    get: function () {
      console.log("Reitrieving department");
      return _department;
    },
    set: function (newValue) {
      console.log('Updating department value to "' + newValue + '"');
      _department = newValue;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(this, "greeting", {
    value: function () {
      console.log("Hi, I'm " + _name + ".");
    },
    enumerable: false,
    configurable: false,
  });
}

var user = new User("Sunny", "Engineering");
console.log(user.department);
user.department = "Marketing";
user.greeting();
Object.defineProperty(user, "name", {
  enumerable: false,
});
delete user.name;
delete user.department;
for (var prop in user) {
  console.log(prop);
}
