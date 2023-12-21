import { note } from "./note";
import { project, task } from "./project";
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
  form.method = "dialog";
  submitButton.type = "submit";
  form.classList.add("note-form");
  titleInput.classList.add("title-input");
  contentInput.classList.add("content-input");
  submitButton.classList.add("submit-button");
  form.appendChild(titleInput);
  form.appendChild(contentInput);
  form.appendChild(submitButton);
  return form;
}
function projectForm() {
  const form = document.createElement("form");
  const titleInput = document.createElement("input");
  const submitButton = document.createElement("button");
  form.method = "dialog";
  submitButton.type = "submit";
  form.classList.add("project-form");
  titleInput.classList.add("title-input");
  submitButton.classList.add("submit-button");
  form.appendChild(titleInput);
  form.appendChild(submitButton);
  submitButton.addEventListener("click", () => {});
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
  const dialog = document.querySelector(".content-dialog");
  const newNoteButton = document.createElement("button");
  newNoteButton.classList.add("new-note", "new-button");
  contentContainer.appendChild(newNoteButton);
  newNoteButton.addEventListener("click", () => {
    loadDialog(noteForm(), dialog);
  });
}
export function projectsPage() {
  const contentContainer = document.querySelector(".content-container");
  const dialog = document.querySelector(".content-dialog");
  const newProjectButton = document.createElement("button");
  newProjectButton.classList.add("new-project", "new-button");
  contentContainer.appendChild(newProjectButton);
  newProjectButton.addEventListener("click", () => {
    loadDialog(projectForm(), dialog);
  });
}
