import { project } from "./project";
import { note } from "./note";
export function container() {
  const projectList = [];
  const noteList = [];
  function addProject(title) {
    projectList.push(new project(title));
  }

  function removeProject(index) {
    projectList.splice(index, 1);
  }
  function addNote(title, content) {
    noteList.push(new note(title, content));
  }
  function removeNote(index) {
    noteList.splice(index, 1);
  }

  return {
    addNote,
    addProject,
    removeNote,
    removeProject,
    projectList,
    noteList,
  };
}
