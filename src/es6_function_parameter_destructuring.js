function workout({ gym }, times) {
  console.log("Workout in " + gym + " for " + times + " times");
}
let thisWeek = { gym: "Gym A" };
workout(thisWeek, 2);

function workout({ gym = "", todos = ["Treadmill"] } = {}) {
  let [first] = todos;
  console.log("Start " + first + " in " + gym);
}
let today = { gym: "Gym A", todos: ["Treadmill"] };
workout(today);
workout({ gym: "Gym B" });
