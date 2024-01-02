import {
  staticPage,
  projectsPage,
  notesPage,
  renderProjects,
  homePage,
} from "./render";
staticPage();
projectsPage();
const contentContainer = document.querySelector(".content-container");
const homeButton = document.querySelector(".home-button");
const projectButton = document.querySelector(".projects-button");
const noteButton = document.querySelector(".notes-button");
homeButton.addEventListener("click", () => {
  contentContainer.innerHTML = "";
  homePage();
});
projectButton.addEventListener("click", () => {
  contentContainer.innerHTML = "";
  projectsPage();
  renderProjects();
});
noteButton.addEventListener("click", () => {
  contentContainer.innerHTML = "";
  notesPage();
});
