// function travel() {
//   console.log("Traveling");
// }
// travel = "No plan";
// var travel;
// console.log(travel);

// travel();

function workout() {
  goToGym();
  var goToGym = function () {
    console.log("Workout in Gym A");
  };
  return;
  function goToGym() {
    console.log("Workout in Gym B");
  }
}
workout();
