// callback
// function getProjects(callback) {
//   // 서버 API를 호출하는 데 setTimeout을 활용
//   setTimeout(() => {
//     callback([
//       { id: 1, name: "Project A" },
//       { id: 2, name: "Project B" },
//     ]);
//   }, 100);
// }
// function getTasks(projects, callback) {
//   // 서버 API를 호출하는 데 setTimeout을 활용
//   setTimeout(() => {
//     // 구체적인 프로젝트의 작업 반환
//     callback([
//       { id: 1, projectId: 1, title: "Task A" },
//       { id: 2, projectId: 2, title: "Task B" },
//     ]);
//   }, 100);
// }
// function render({ projects, tasks }) {
//   console.log(`Render ${projects.length} projects and ${tasks.lenght} tasks`);
// }
// getProjects((projects) => {
//   getTasks(projects, (tasks) => {
//     render({ projects, tasks });
//   });
// });

// promise
function getProjects() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Project A" },
        { id: 2, name: "Project B" },
      ]);
    }, 100);
  });
}
function getTasks(projects) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ projects, tasks: ["Buy three tickets", "Book a hotel"] });
    }, 100);
  });
}
function render({ projects, tasks }) {
  console.log(`Render ${projects.length} projects and ${tasks.lenght} tasks`);
}
getProjects()
  .then(getTasks)
  .then(render)
  .catch((error) => {
    console.log("Handling error", error);
  });
