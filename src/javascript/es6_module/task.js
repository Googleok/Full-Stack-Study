console.log("Inside tasks module");
export default function completeTask(user) {
  console.log(`${user.name} completed a task`);
  completedCount++;
}
// 완료된 작업의 개수를 추적
export let completedCount = 0;
