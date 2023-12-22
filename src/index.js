import { staticPage, projectsPage, notesPage } from "./render";
staticPage();
const contentContainer = document.querySelector(".content-container");
const projectButton = document.querySelector(".projects-button");
const homeButton = document.querySelector(".home-button");
const noteButton = document.querySelector(".notes-button");
projectButton.addEventListener("click", () => {
  contentContainer.innerHTML = "";
  projectsPage();
});
noteButton.addEventListener("click", () => {
  contentContainer.innerHTML = "";
  notesPage();
});
