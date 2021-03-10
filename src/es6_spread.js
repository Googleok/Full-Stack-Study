let urgentTasks = ["Buy three tickets"];
let normalTasks = ["Book a hotel", "Rent a car"];
let allTasks = [...urgentTasks, ...normalTasks];

((first, second) => {
  console.log("Working on " + first + " and " + second);
})(...allTasks);
