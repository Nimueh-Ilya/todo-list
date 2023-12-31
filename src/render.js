import { myContainer } from "./container";
const container = myContainer();
function loadDialog(page, dialog) {
  dialog.innerHTML = "";
  dialog.appendChild(page);
  dialog.showModal();
}
function noteForm() {
  const form = document.createElement("form");
  const titleInput = document.createElement("input");
  const contentInput = document.createElement("textarea");
  const submitButton = document.createElement("button");
  titleInput.required = true;
  contentInput.required = true;

  form.method = "dialog";
  submitButton.type = "submit";
  form.classList.add("note-form");
  titleInput.classList.add("title-input");
  contentInput.classList.add("content-input");
  submitButton.classList.add("submit-button");
  form.appendChild(titleInput);
  form.appendChild(contentInput);
  form.appendChild(submitButton);
  submitButton.addEventListener("click", () => {
    if (titleInput.value) {
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
  titleInput.required = true;
  form.method = "dialog";
  submitButton.type = "submit";
  form.classList.add("project-form");
  titleInput.classList.add("title-input");
  submitButton.classList.add("submit-button");
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
  const descriptionInput = document.createElement("input");
  const dueDateInput = document.createElement("input");
  const priorityInput = document.createElement("input");
  const stageInput = document.createElement("input");
  const submitButton = document.createElement("button");

  form.classList.add("project-form");
  titleInput.classList.add("title-input");
  descriptionInput.classList.add("description-input");
  dueDateInput.classList.add("dueDate-input");
  priorityInput.classList.add("priority-input");
  stageInput.classList.add("stage-input");
  submitButton.classList.add("submit-button");

  titleInput.required = true;
  descriptionInput.required = true;
  dueDateInput.required = true;
  priorityInput.required = true;
  stageInput.required = true;

  form.method = "dialog";
  submitButton.type = "none";

  form.appendChild(titleInput);
  form.appendChild(descriptionInput);
  form.appendChild(dueDateInput);
  form.appendChild(priorityInput);
  form.appendChild(stageInput);
  form.appendChild(submitButton);

  submitButton.addEventListener("click", () => {
    if (titleInput.value) {
      object.addTask(
        titleInput.value,
        descriptionInput.value,
        dueDateInput.value,
        priorityInput.value,
        stageInput.value
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

  sideBar.appendChild(sideBarHome);
  sideBar.appendChild(sideBarProjects);
  sideBar.appendChild(sideBarNotes);
  mainContainer.appendChild(dialog);
  mainContainer.appendChild(header);
  mainContainer.appendChild(sideBar);
  mainContainer.appendChild(contentContainer);

  sideBarHome.innerHTML = "home";
  sideBarNotes.innerHTML = "note";
  sideBarProjects.innerHTML = "project";
  return mainContainer;
}
export function notesPage() {
  const contentContainer = document.querySelector(".content-container");
  const noteContainer = document.createElement("div");
  const dialog = document.querySelector(".content-dialog");
  const newNoteButton = document.createElement("button");
  newNoteButton.classList.add("new-note", "new-button");
  noteContainer.classList.add("note-container");
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
    const newTaskButton = document.createElement("button");

    projectDiv.classList.add("project-div");
    projectTitleDiv.classList.add("project-title-div");
    projectContentDiv.classList.add("project-content-div");
    newTaskButton.classList.add("new-task-button");

    projectDiv.dataset.index = container.projectList.indexOf(object);

    newTaskButton.addEventListener("click", () => {
      loadDialog(taskForm(object), dialog);
    });

    object.tasks.forEach((element) => {
      const taskDiv = document.createElement("div");
      const taskCheckBox = document.createElement("input");
      const taskLabel = document.createElement("label");

      taskDiv.classList.add("task-div");
      taskCheckBox.classList.add("task-checkbox");
      taskLabel.classList.add("task-label");

      taskLabel.innerText = element.title;

      taskDiv.appendChild(taskCheckBox);
      taskDiv.appendChild(taskLabel);

      projectContentDiv.appendChild(taskDiv);
    });
    projectTitleDiv.innerHTML = object.title;
    projectDiv.appendChild(projectTitleDiv);
    projectDiv.appendChild(projectContentDiv);
    projectDiv.appendChild(newTaskButton);
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

    noteDiv.classList.add("note-div");
    noteTitle.classList.add("note-title");
    noteContent.classList.add("note-content");

    noteDiv.dataset.index = container.noteList.indexOf(notes);

    noteTitle.innerText = notes.title;
    noteContent.innerText = notes.content;

    noteDiv.appendChild(noteTitle);
    noteDiv.appendChild(noteContent);
    noteContainer.appendChild(noteDiv);
    contentContainer.appendChild(noteContainer);
  });
}
function attributeUpdate(element, object, list) {
  element.dataset.index = content.list.indexOf(object);
}
