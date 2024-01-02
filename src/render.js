import { myContainer } from "./container";
import { note } from "./note";
import { project, task } from "./project";
const container = myContainer();
function loadDialog(page, dialog) {
  dialog.innerHTML = "";
  dialog.appendChild(page);
  dialog.showModal();
}
function showTask(object) {
  const form = document.createElement("form");
  const titleInput = document.createElement("input");
  const descriptionInput = document.createElement("textarea");
  const dueDateInput = document.createElement("input");
  const priorityInput = document.createElement("input");
  const submitButton = document.createElement("button");
  const titleLabel = document.createElement("label");
  const descriptionLabel = document.createElement("label");
  const dueDateLabel = document.createElement("label");
  const priorityLabel = document.createElement("label");

  form.classList.add("project-form");
  titleInput.classList.add("title-input");
  descriptionInput.classList.add("description-input");
  dueDateInput.classList.add("dueDate-input");
  priorityInput.classList.add("priority-input");
  submitButton.classList.add("submit-button");

  titleInput.id = "title";
  descriptionInput.id = "description";
  dueDateInput.id = "dueDate";
  priorityInput.id = "priority";

  titleInput.value = object.title;
  descriptionInput.value = object.description;
  dueDateInput.value = object.dueDate;
  priorityInput.value = object.priority;

  titleLabel.setAttribute("for", "title");
  descriptionLabel.setAttribute("for", "description");
  dueDateLabel.setAttribute("for", "dueDate");
  priorityLabel.setAttribute("for", "priority");

  titleLabel.innerText = "Title";
  descriptionLabel.innerText = "Description";
  dueDateLabel.innerText = "Due date";
  priorityLabel.innerText = "Urgent?";
  submitButton.innerText = "Edit";

  dueDateInput.type = "date";
  priorityInput.type = "checkbox";
  descriptionInput.setAttribute("rows", "10");
  descriptionInput.setAttribute("cols", "20");

  titleInput.required = true;
  descriptionInput.required = true;
  dueDateInput.required = true;

  form.method = "dialog";
  submitButton.type = "none";
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionInput);
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);
  form.appendChild(priorityLabel);
  form.appendChild(priorityInput);
  form.appendChild(submitButton);

  submitButton.addEventListener("click", () => {
    let urgency = false;
    if (priorityInput.checked) {
      urgency = true;
    }
    if (titleInput.value) {
      object.editTask(
        titleInput.value,
        descriptionInput.value,
        dueDateInput.value,
        urgency,
        object.completed
      );
      renderProjects();
    } else {
      return;
    }
  });
  return form;
}
function noteForm() {
  const form = document.createElement("form");
  const titleInput = document.createElement("input");
  const contentInput = document.createElement("textarea");
  const submitButton = document.createElement("button");
  const titleLabel = document.createElement("label");
  const contentLabel = document.createElement("label");
  titleInput.required = true;
  contentInput.required = true;

  form.method = "dialog";
  submitButton.type = "submit";
  form.classList.add("note-form");
  titleInput.classList.add("title-input");
  contentInput.classList.add("content-input");
  submitButton.classList.add("submit-button");
  titleLabel.classList.add("title-label", "form-label");
  contentLabel.classList.add("content-label", "form-label");
  titleInput.id = "title";
  contentInput.id = "content";
  titleLabel.setAttribute("for", "title");
  contentLabel.setAttribute("for", "content");
  contentInput.setAttribute("rows", "20");
  contentInput.setAttribute("cols", "40");
  titleLabel.innerText = "Title";
  contentLabel.innerText = "Content";
  submitButton.innerText = "submit";
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(contentLabel);
  form.appendChild(contentInput);
  form.appendChild(submitButton);
  submitButton.addEventListener("click", () => {
    if (titleInput.value && contentInput.value) {
      container.addNote(titleInput.value, contentInput.value);
      renderNotes();
    } else {
      return;
    }
  });
  return form;
}
function projectForm() {
  const form = document.createElement("form");
  const titleInput = document.createElement("input");
  const submitButton = document.createElement("button");
  const titleLabel = document.createElement("label");
  titleInput.required = true;
  form.method = "dialog";
  submitButton.type = "submit";
  form.classList.add("project-form");
  titleInput.classList.add("title-input");
  submitButton.classList.add("submit-button");
  titleInput.id = "title";
  titleLabel.setAttribute("for", "title");
  titleLabel.innerText = "Title";
  submitButton.innerText = "Submit";
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(submitButton);
  submitButton.addEventListener("click", () => {
    if (titleInput.value) {
      container.addProject(titleInput.value);
      renderProjects();
    } else {
      return;
    }
  });

  return form;
}
function taskForm(object) {
  const form = document.createElement("form");
  const titleInput = document.createElement("input");
  const descriptionInput = document.createElement("textarea");
  const dueDateInput = document.createElement("input");
  const priorityInput = document.createElement("input");
  const submitButton = document.createElement("button");
  const titleLabel = document.createElement("label");
  const descriptionLabel = document.createElement("label");
  const dueDateLabel = document.createElement("label");
  const priorityLabel = document.createElement("label");

  form.classList.add("project-form");
  titleInput.classList.add("title-input");
  descriptionInput.classList.add("description-input");
  dueDateInput.classList.add("dueDate-input");
  priorityInput.classList.add("priority-input");
  submitButton.classList.add("submit-button");

  titleInput.id = "title";
  descriptionInput.id = "description";
  dueDateInput.id = "dueDate";
  priorityInput.id = "priority";

  titleLabel.setAttribute("for", "title");
  descriptionLabel.setAttribute("for", "description");
  dueDateLabel.setAttribute("for", "dueDate");
  priorityLabel.setAttribute("for", "priority");

  titleLabel.innerText = "Title";
  descriptionLabel.innerText = "Description";
  dueDateLabel.innerText = "Due date";
  priorityLabel.innerText = "Urgent?";
  submitButton.innerText = "Submit";

  dueDateInput.type = "date";
  priorityInput.type = "checkbox";
  descriptionInput.setAttribute("rows", "10");
  descriptionInput.setAttribute("cols", "20");

  titleInput.required = true;
  descriptionInput.required = true;
  dueDateInput.required = true;

  form.method = "dialog";
  submitButton.type = "none";
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionInput);
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);
  form.appendChild(priorityLabel);
  form.appendChild(priorityInput);
  form.appendChild(submitButton);

  submitButton.addEventListener("click", () => {
    let urgency = false;
    if (priorityInput.checked) {
      urgency = true;
    }
    if (titleInput.value) {
      object.addTask(
        titleInput.value,
        descriptionInput.value,
        dueDateInput.value,
        urgency,
        false
      );
      renderProjects();
    } else {
      return;
    }
  });
  return form;
}
export function staticPage() {
  const mainContainer = document.querySelector(".main-container");
  const header = document.createElement("div");
  const sideBar = document.createElement("div");
  const contentContainer = document.createElement("div");
  const sideBarNotes = document.createElement("div");
  const sideBarHome = document.createElement("div");
  const sideBarProjects = document.createElement("div");
  const dialog = document.createElement("dialog");

  dialog.classList.add("content-dialog");
  header.classList.add("header");
  sideBar.classList.add("sidebar");
  contentContainer.classList.add("content-container");

  sideBarHome.classList.add("home-button");
  sideBarProjects.classList.add("projects-button");
  sideBarNotes.classList.add("notes-button");

  header.innerText = "My TODO List";

  sideBar.appendChild(sideBarHome);
  sideBar.appendChild(sideBarProjects);
  sideBar.appendChild(sideBarNotes);
  mainContainer.appendChild(dialog);
  mainContainer.appendChild(header);
  mainContainer.appendChild(sideBar);
  mainContainer.appendChild(contentContainer);

  sideBarHome.innerText = "Home";
  sideBarNotes.innerText = "Notes";
  sideBarProjects.innerText = "Projects";
  return mainContainer;
}
export function homePage() {
  const contentContainer = document.querySelector(".content-container");
  const homeContainer = document.createElement("div");
  const tasksContainer = document.createElement("div");
  const nonUrgentContainer = document.createElement("div");
  const urgentContainer = document.createElement("div");

  homeContainer.classList.add("home-container");
  tasksContainer.classList.add("home-all-tasks");
  nonUrgentContainer.classList.add("home-non-urgent");
  urgentContainer.classList.add("home-urgent");

  homeContainer.appendChild(urgentContainer);
  homeContainer.appendChild(nonUrgentContainer);
  homeContainer.appendChild(tasksContainer);
  contentContainer.appendChild(homeContainer);

  renderTasks();
}
export function notesPage() {
  const contentContainer = document.querySelector(".content-container");
  const noteContainer = document.createElement("div");
  const dialog = document.querySelector(".content-dialog");
  const newNoteButton = document.createElement("button");
  newNoteButton.classList.add("new-note", "new-button");
  noteContainer.classList.add("note-container");
  newNoteButton.innerText = "New Note";
  contentContainer.appendChild(newNoteButton);
  contentContainer.appendChild(noteContainer);
  renderNotes();
  newNoteButton.addEventListener("click", () => {
    loadDialog(noteForm(), dialog);
  });
}
export function projectsPage() {
  const contentContainer = document.querySelector(".content-container");
  const projectContainer = document.createElement("div");
  const dialog = document.querySelector(".content-dialog");
  const newProjectButton = document.createElement("button");
  projectContainer.classList.add("project-container");
  newProjectButton.classList.add("new-project", "new-button");
  newProjectButton.innerText = "New Project";
  contentContainer.appendChild(newProjectButton);
  contentContainer.appendChild(projectContainer);

  newProjectButton.addEventListener("click", () => {
    loadDialog(projectForm(), dialog);
    renderProjects();
  });
}
export function renderProjects() {
  const projectContainer = document.querySelector(".project-container");
  const dialog = document.querySelector(".content-dialog");
  projectContainer.innerHTML = "";
  container.projectList.forEach((object) => {
    const projectDiv = document.createElement("div");
    const projectTitleDiv = document.createElement("div");
    const projectContentDiv = document.createElement("div");
    const footer = document.createElement("div");
    const newTaskButton = document.createElement("button");
    const deleteProjectButton = document.createElement("button");

    projectDiv.classList.add("project-div");
    projectTitleDiv.classList.add("project-title-div");
    projectContentDiv.classList.add("project-content-div");
    newTaskButton.classList.add("new-task-button", "new-button");
    deleteProjectButton.classList.add("delete-project-button", "new-button");
    footer.classList.add("footer");

    newTaskButton.innerText = "New Task";
    deleteProjectButton.innerText = "Delete Project";

    projectDiv.dataset.index = container.projectList.indexOf(object);

    newTaskButton.addEventListener("click", () => {
      loadDialog(taskForm(object), dialog);
    });
    deleteProjectButton.addEventListener("click", () => {
      container.removeProject(projectDiv.dataset.index);
      renderProjects();
    });

    object.tasks.forEach((element) => {
      const taskDiv = document.createElement("div");
      const deleteTaskButton = document.createElement("div");
      const taskCheckBox = document.createElement("input");
      const taskLabel = document.createElement("label");

      deleteTaskButton.classList.add("remove-task");
      taskDiv.classList.add("task-div");
      taskCheckBox.classList.add("task-checkbox");
      taskLabel.classList.add("task-label");

      taskLabel.innerText = element.title;
      deleteTaskButton.innerText = "X";
      taskCheckBox.type = "checkbox";

      taskCheckBox.addEventListener("click", () => {
        if (taskCheckBox.checked) {
          element.completed = true;
        } else if (!taskCheckBox.checked) {
          element.completed = false;
        }
      });
      taskLabel.addEventListener("click", () => {
        loadDialog(showTask(element), dialog);
      });
      deleteTaskButton.addEventListener("click", () => {
        object.removeTask(object.tasks.indexOf(element));
        renderProjects();
      });
      if (element.completed) {
        taskCheckBox.checked = true;
      } else {
        taskCheckBox.checked = false;
      }

      taskDiv.appendChild(taskCheckBox);
      taskDiv.appendChild(taskLabel);
      taskDiv.appendChild(deleteTaskButton);

      projectContentDiv.appendChild(taskDiv);
    });
    projectTitleDiv.innerHTML = object.title;
    footer.appendChild(newTaskButton);
    footer.appendChild(deleteProjectButton);
    projectDiv.appendChild(projectTitleDiv);
    projectDiv.appendChild(projectContentDiv);
    projectDiv.appendChild(footer);
    projectContainer.appendChild(projectDiv);
  });
}
function renderNotes() {
  const noteContainer = document.querySelector(".note-container");
  const contentContainer = document.querySelector(".content-container");
  noteContainer.innerHTML = "";
  container.noteList.forEach((notes) => {
    const noteDiv = document.createElement("div");
    const noteTitle = document.createElement("div");
    const noteContent = document.createElement("div");
    const deleteNoteButton = document.createElement("button");

    noteDiv.classList.add("note-div");
    noteTitle.classList.add("note-title");
    noteContent.classList.add("note-content");
    deleteNoteButton.classList.add("delete-note-button", "new-button");

    noteDiv.dataset.index = container.noteList.indexOf(notes);

    noteTitle.innerText = notes.title;
    noteContent.innerText = notes.content;
    deleteNoteButton.innerText = "Delete Note";

    deleteNoteButton.addEventListener("click", () => {
      container.removeNote(noteDiv.dataset.index);
      renderNotes();
    });

    noteDiv.appendChild(noteTitle);
    noteDiv.appendChild(noteContent);
    noteDiv.appendChild(deleteNoteButton);
    noteContainer.appendChild(noteDiv);
    contentContainer.appendChild(noteContainer);
  });
}
function renderTasks() {
  const urgentTab = document.querySelector(".home-urgent");
  const nonUrgentTab = document.querySelector(".home-non-urgent");
  const allTab = document.querySelector(".home-all-tasks");
  container.taskList = [];
  let urgentTasks = [];
  let nonUrgentTasks = [];
  container.projectList.forEach((object) => {
    object.tasks.forEach((element) => {
      container.taskList.push(element);
    });
  });
  container.taskList.sort((a, b) => {
    return Date.parse(a.dueDate) - Date.parse(b.dueDate);
  });
  container.taskList.forEach((element) => {
    if (element.priority) {
      urgentTasks.push(element);
    }
    if (!element.priority) {
      nonUrgentTasks.push(element);
    }
    const taskNode = document.createElement("div");
    const taskTitle = document.createElement("div");
    const taskDueDate = document.createElement("div");
    taskTitle.innerText = element.title;
    taskDueDate.innerText = element.dueDate;
    taskNode.appendChild(taskTitle);
    taskNode.appendChild(taskDueDate);
    allTab.appendChild(taskNode);
  });
  urgentTasks.forEach((element) => {
    const taskNode = document.createElement("div");
    const taskTitle = document.createElement("div");
    const taskDueDate = document.createElement("div");
    taskTitle.innerText = element.title;
    taskDueDate.innerText = element.dueDate;
    taskNode.appendChild(taskTitle);
    taskNode.appendChild(taskDueDate);
    urgentTab.appendChild(taskNode);
  });
  nonUrgentTasks.forEach((element) => {
    const taskNode = document.createElement("div");
    const taskTitle = document.createElement("div");
    const taskDueDate = document.createElement("div");
    taskTitle.innerText = element.title;
    taskDueDate.innerText = element.dueDate;
    taskNode.appendChild(taskTitle);
    taskNode.appendChild(taskDueDate);
    nonUrgentTab.appendChild(taskNode);
  });
}
function attributeUpdate(element, object, list) {
  element.dataset.index = content.list.indexOf(object);
}
