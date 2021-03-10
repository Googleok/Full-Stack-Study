let user = {
  name: "Ted",
  greeting() {
    console.log(`Hello, I'm ${this.name}.`);
  },
};
user.greeting();

let greeting = `Hello, I'm ${user.name}.
  Welcome to the team!`;
console.log(greeting);
