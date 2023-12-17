export default function render() {
  function staticPage() {
    const mainContainer = document.createElement("div");
    const header = document.createElement("div");
    const sideBar = document.createElement("div");
    const contentContainer = document.createElement("div");
    const sideBarNotes = document.createElement("div");
    const sideBarHome = document.createElement("div");
    const sideBarProjects = document.createElement("div");
    sideBar.appendChild(sideBarHome);
    sideBar.appendChild(sideBarProjects);
    sideBar.appendChild(sideBarNotes);
    mainContainer.appendChild(header);
    mainContainer.appendChild(sideBar);
    mainContainer.appendChild(contentContainer);
    header.classList.add("header");
    sideBar.classList.add("sidebar");
    contentContainer.classList.add("content-container");
    sideBarHome.classList.add("home-button");
    sideBarProjects.classList.add("projects-button");
    sideBarNotes.classList.add("notes-button");

    return mainContainer;
  }
}
