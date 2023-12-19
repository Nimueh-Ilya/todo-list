import { note } from "./note";
import { project, task } from "./project";
import { myContainer } from "./container";
const container = myContainer();
const dialog = document.createElement("dialog");
export function staticPage() {
  const mainContainer = document.querySelector(".main-container");
  const header = document.createElement("div");
  const sideBar = document.createElement("div");
  const contentContainer = document.createElement("div");
  const sideBarNotes = document.createElement("div");
  const sideBarHome = document.createElement("div");
  const sideBarProjects = document.createElement("div");

  header.classList.add("header");
  sideBar.classList.add("sidebar");
  contentContainer.classList.add("content-container");
  sideBarHome.classList.add("home-button");
  sideBarProjects.classList.add("projects-button");
  sideBarNotes.classList.add("notes-button");

  sideBar.appendChild(sideBarHome);
  sideBar.appendChild(sideBarProjects);
  sideBar.appendChild(sideBarNotes);
  mainContainer.appendChild(header);
  mainContainer.appendChild(sideBar);
  mainContainer.appendChild(contentContainer);

  return mainContainer;
}
export function notesPage() {
  const contentContainer = document.querySelector(".content-container");
  const newNoteButton = document.createElement("button");
  newNoteButton.classList.add("new-note", "new-button");
  contentContainer.appendChild(newNoteButton);
  newNoteButton.addEventListener("click", () => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("nite-div");
    container.addNote("my note", "note content");
  });
}
export function projectsPage() {
  const contentContainer = document.querySelector(".content-container");
  const newProjectButton = document.createElement("button");
  newProjectButton.classList.add("new-project", "new-button");
  contentContainer.appendChild(newProjectButton);
  newProjectButton.addEventListener("click", () => {
    const projectDiv = document.createElement("div");
    const newTaskButton = document.createElement("button");
    newTaskButton.classList.add("new-task");
    projectDiv.classList.add("project-div");
    projectDiv.appendChild(newTaskButton);
    contentContainer.appendChild(projectDiv);

    container.addProject("Project 1");
  });
}
