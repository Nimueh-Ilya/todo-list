import { staticPage, projectsPage, notesPage, renderProjects } from "./render";
staticPage();
const contentContainer = document.querySelector(".content-container");
const projectButton = document.querySelector(".projects-button");
const noteButton = document.querySelector(".notes-button");
projectButton.addEventListener("click", () => {
  contentContainer.innerHTML = "";
  projectsPage();
  renderProjects();
});
noteButton.addEventListener("click", () => {
  contentContainer.innerHTML = "";
  notesPage();
});
