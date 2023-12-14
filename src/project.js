export class project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
  editProject() {
    console.log("edit project");
  }

  removeProject() {
    console.log("remove project");
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(task) {
    this.tasks.pop(task);
  }
  viewTask() {
    console.log("view task");
  }
  completeTask(task) {
    task.status = !task.status;
  }
}
