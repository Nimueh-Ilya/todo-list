import { note } from "./note";
import { project, task } from "./project";
import { container } from "./container";

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
    container().addNote("my note", "note content");
  });
}
export function projectsPage() {
  const contentContainer = document.querySelector(".content-container");
  const newProjectButton = document.createElement("button");
  newProjectButton.classList.add("new-project", "new-button");
  contentContainer.appendChild(newProjectButton);
  newProjectButton.addEventListener("click", () => {
    container().addProject("my project");
    console.log(container().projectList);
  });
}
