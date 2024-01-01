export class task {
  constructor(title, description, dueDate, priority, completed) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
  editTask(title, description, dueDate, priority, completed) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
}
export class project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
  editProject(title) {
    this.title = title;
  }
  addTask(title, description, dueDate, priority, stage) {
    this.tasks.push(new task(title, description, dueDate, priority, stage));
  }
  removeTask(task) {
    this.tasks.splice(task, 1);
  }
  viewTask() {
    console.log("view task");
  }
  completeTask(task) {
    task.stage = !task.stage;
  }
}
