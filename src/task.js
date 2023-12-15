export default class task {
  constructor(title, description, dueDate, priority, stage) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.stage = stage;
  }
  editTask(title, description, dueDate, priority, stage) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.stage = stage;
  }
}
