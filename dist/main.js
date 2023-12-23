(()=>{"use strict";class e{constructor(e,t,n,d,c){this.title=e,this.description=t,this.dueDate=n,this.priority=d,this.stage=c}editTask(e,t,n,d,c){this.title=e,this.description=t,this.dueDate=n,this.priority=d,this.stage=c}}class t{constructor(e){this.title=e,this.tasks=[]}editProject(e){this.title=e}addTask(t,n,d,c,i){this.tasks.push(new e(t,n,d,c,i))}removeTask(e){this.tasks.splice(e,1)}viewTask(){console.log("view task")}completeTask(e){e.stage=!e.stage}}class n{constructor(e,t){this.title=e,this.content=t}editNote(e,t){this.title=e,this.content=t}}const d=function(){const e=[],d=[];return{addNote:function(e,t){d.push(new n(e,t))},addProject:function(n){e.push(new t(n))},removeNote:function(e){d.splice(e,1)},removeProject:function(t){e.splice(t,1)},projectList:e,noteList:d}}();function c(e,t){t.innerHTML="",t.appendChild(e),t.showModal()}function i(){const e=document.querySelector(".project-container"),t=document.querySelector(".content-dialog");e.innerHTML="",d.projectList.forEach((n=>{const o=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div"),l=document.createElement("button");o.classList.add("project-div"),a.classList.add("project-title-div"),s.classList.add("project-content-div"),l.classList.add("new-task-button"),o.dataset.index=d.projectList.indexOf(n),l.addEventListener("click",(()=>{console.log("bug here"),c(function(e){const t=document.createElement("form"),n=document.createElement("input"),c=document.createElement("input"),o=document.createElement("input"),a=document.createElement("input"),s=document.createElement("input"),l=document.createElement("button");return t.classList.add("project-form"),n.classList.add("title-input"),c.classList.add("description-input"),o.classList.add("dueDate-input"),a.classList.add("priority-input"),s.classList.add("stage-input"),l.classList.add("submit-button"),t.method="dialog",l.type="none",t.appendChild(n),t.appendChild(c),t.appendChild(o),t.appendChild(a),t.appendChild(s),t.appendChild(l),l.addEventListener("click",(()=>{e.addTask(n.value,c.value,o.value,a.value,s.value),i(),console.log(d.projectList)})),t}(n),t)})),n.tasks.forEach((e=>{const t=document.createElement("div"),n=document.createElement("input"),d=document.createElement("label");t.classList.add("task-div"),n.classList.add("task-checkbox"),d.classList.add("task-label"),t.appendChild(n),t.appendChild(d),s.appendChild(t)})),o.appendChild(a),o.appendChild(s),o.appendChild(l),e.appendChild(o)}))}function o(){const e=document.querySelector(".note-container"),t=document.querySelector(".content-container");e.innerHTML="",d.noteList.forEach((n=>{const c=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div");c.classList.add("note-div"),i.classList.add("note-title"),o.classList.add("note-content"),c.dataset.index=d.noteList.indexOf(object),c.appendChild(i),c.appendChild(o),e.appendChild(c),t.appendChild(e)}))}!function(){const e=document.querySelector(".main-container"),t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),a=document.createElement("dialog");a.classList.add("content-dialog"),t.classList.add("header"),n.classList.add("sidebar"),d.classList.add("content-container"),i.classList.add("home-button"),o.classList.add("projects-button"),c.classList.add("notes-button"),n.appendChild(i),n.appendChild(o),n.appendChild(c),e.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(d),i.innerHTML="home",c.innerHTML="note",o.innerHTML="project"}();const a=document.querySelector(".content-container"),s=document.querySelector(".projects-button"),l=(document.querySelector(".home-button"),document.querySelector(".notes-button"));s.addEventListener("click",(()=>{a.innerHTML="",function(){const e=document.querySelector(".content-container"),t=document.createElement("div"),n=document.querySelector(".content-dialog"),o=document.createElement("button");t.classList.add("project-container"),o.classList.add("new-project","new-button"),e.appendChild(o),e.appendChild(t),o.addEventListener("click",(()=>{console.log("bugged"),c(function(){const e=document.createElement("form"),t=document.createElement("input"),n=document.createElement("button");return e.method="dialog",n.type="submit",e.classList.add("project-form"),t.classList.add("title-input"),n.classList.add("submit-button"),e.appendChild(t),e.appendChild(n),n.addEventListener("click",(()=>{d.addProject(t.value),i()})),e}(),n),i()}))}(),i()})),l.addEventListener("click",(()=>{a.innerHTML="",function(){const e=document.querySelector(".content-container"),t=document.createElement("div"),n=document.querySelector(".content-dialog"),i=document.createElement("button");i.classList.add("new-note","new-button"),t.classList.add("note-container"),e.appendChild(i),e.appendChild(t),o(),i.addEventListener("click",(()=>{c(function(){const e=document.createElement("form"),t=document.createElement("input"),n=document.createElement("textarea"),c=document.createElement("button");return e.method="dialog",c.type="submit",e.classList.add("note-form"),t.classList.add("title-input"),n.classList.add("content-input"),c.classList.add("submit-button"),e.appendChild(t),e.appendChild(n),e.appendChild(c),c.addEventListener("click",(()=>{d.addNote(t.value,n.value),o(),console.log(d.noteList)})),e}(),n)}))}()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQixHQUVwQixDQzFJRWlELEdBQ0FqRCxHQUFnQixJQUVsQjhDLEVBQVcvQixpQkFBaUIsU0FBUyxLQUNuQ2tCLEVBQWlCcEMsVUFBWSxHRHlHeEIsV0FDTCxNQUFNb0MsRUFBbUIvQixTQUFTQyxjQUFjLHNCQUMxQzZCLEVBQWdCOUIsU0FBU0ssY0FBYyxPQUN2Q1gsRUFBU00sU0FBU0MsY0FBYyxtQkFDaEMrQyxFQUFnQmhELFNBQVNLLGNBQWMsVUFDN0MyQyxFQUFjdkMsVUFBVUMsSUFBSSxXQUFZLGNBQ3hDb0IsRUFBY3JCLFVBQVVDLElBQUksa0JBQzVCcUIsRUFBaUJuQyxZQUFZb0QsR0FDN0JqQixFQUFpQm5DLFlBQVlrQyxHQUM3QkQsSUFDQW1CLEVBQWNuQyxpQkFBaUIsU0FBUyxLQUN0Q3JCLEVBekhKLFdBQ0UsTUFBTXNCLEVBQU9kLFNBQVNLLGNBQWMsUUFDOUJVLEVBQWFmLFNBQVNLLGNBQWMsU0FDcEM0QyxFQUFlakQsU0FBU0ssY0FBYyxZQUN0Q2UsRUFBZXBCLFNBQVNLLGNBQWMsVUFlNUMsT0FkQVMsRUFBS08sT0FBUyxTQUNkRCxFQUFhRSxLQUFPLFNBQ3BCUixFQUFLTCxVQUFVQyxJQUFJLGFBQ25CSyxFQUFXTixVQUFVQyxJQUFJLGVBQ3pCdUMsRUFBYXhDLFVBQVVDLElBQUksaUJBQzNCVSxFQUFhWCxVQUFVQyxJQUFJLGlCQUMzQkksRUFBS2xCLFlBQVltQixHQUNqQkQsRUFBS2xCLFlBQVlxRCxHQUNqQm5DLEVBQUtsQixZQUFZd0IsR0FDakJBLEVBQWFQLGlCQUFpQixTQUFTLEtBQ3JDOUIsRUFBVUcsUUFBUTZCLEVBQVdRLE1BQU8wQixFQUFhMUIsT0FDakRNLElBQ0FwRCxRQUFRQyxJQUFJSyxFQUFVRSxTQUFTLElBRTFCNkIsQ0FDVCxDQXFHZW9DLEdBQVl4RCxFQUFPLEdBRWxDLENDckhFeUQsRUFBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25vdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgdGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YWdlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnN0YWdlID0gc3RhZ2U7XG4gIH1cbiAgZWRpdFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhZ2UpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuc3RhZ2UgPSBzdGFnZTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIHByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cbiAgZWRpdFByb2plY3QodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cbiAgYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGFnZSkge1xuICAgIHRoaXMudGFza3MucHVzaChuZXcgdGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGFnZSkpO1xuICB9XG4gIHJlbW92ZVRhc2sodGFzaykge1xuICAgIHRoaXMudGFza3Muc3BsaWNlKHRhc2ssIDEpO1xuICB9XG4gIHZpZXdUYXNrKCkge1xuICAgIGNvbnNvbGUubG9nKFwidmlldyB0YXNrXCIpO1xuICB9XG4gIGNvbXBsZXRlVGFzayh0YXNrKSB7XG4gICAgdGFzay5zdGFnZSA9ICF0YXNrLnN0YWdlO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3Mgbm90ZSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBjb250ZW50KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cbiAgZWRpdE5vdGUodGl0bGUsIGNvbnRlbnQpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IG5vdGUgfSBmcm9tIFwiLi9ub3RlXCI7XG5leHBvcnQgY29uc3QgbXlDb250YWluZXIgPSBmdW5jdGlvbiBjb250YWluZXIoKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gW107XG4gIGNvbnN0IG5vdGVMaXN0ID0gW107XG4gIGZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUpIHtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKG5ldyBwcm9qZWN0KHRpdGxlKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGluZGV4KSB7XG4gICAgcHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICBmdW5jdGlvbiBhZGROb3RlKHRpdGxlLCBjb250ZW50KSB7XG4gICAgbm90ZUxpc3QucHVzaChuZXcgbm90ZSh0aXRsZSwgY29udGVudCkpO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZU5vdGUoaW5kZXgpIHtcbiAgICBub3RlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZGROb3RlLFxuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlTm90ZSxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIHByb2plY3RMaXN0LFxuICAgIG5vdGVMaXN0LFxuICB9O1xufTtcbiIsImltcG9ydCB7IG15Q29udGFpbmVyIH0gZnJvbSBcIi4vY29udGFpbmVyXCI7XG5jb25zdCBjb250YWluZXIgPSBteUNvbnRhaW5lcigpO1xuZnVuY3Rpb24gbG9hZERpYWxvZyhwYWdlLCBkaWFsb2cpIHtcbiAgZGlhbG9nLmlubmVySFRNTCA9IFwiXCI7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChwYWdlKTtcbiAgZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuZnVuY3Rpb24gbm90ZUZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgY29udGVudElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBmb3JtLm1ldGhvZCA9IFwiZGlhbG9nXCI7XG4gIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwibm90ZS1mb3JtXCIpO1xuICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1pbnB1dFwiKTtcbiAgY29udGVudElucHV0LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWlucHV0XCIpO1xuICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idXR0b25cIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY29udGVudElucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb250YWluZXIuYWRkTm90ZSh0aXRsZUlucHV0LnZhbHVlLCBjb250ZW50SW5wdXQudmFsdWUpO1xuICAgIHJlbmRlck5vdGVzKCk7XG4gICAgY29uc29sZS5sb2coY29udGFpbmVyLm5vdGVMaXN0KTtcbiAgfSk7XG4gIHJldHVybiBmb3JtO1xufVxuZnVuY3Rpb24gcHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZm9ybS5tZXRob2QgPSBcImRpYWxvZ1wiO1xuICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybVwiKTtcbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGl0bGUtaW5wdXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWJ1dHRvblwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb250YWluZXIuYWRkUHJvamVjdCh0aXRsZUlucHV0LnZhbHVlKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICB9KTtcblxuICByZXR1cm4gZm9ybTtcbn1cbmZ1bmN0aW9uIHRhc2tGb3JtKG9iamVjdCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3Qgc3RhZ2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvcm1cIik7XG4gIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRpdGxlLWlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1pbnB1dFwiKTtcbiAgZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkdWVEYXRlLWlucHV0XCIpO1xuICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1pbnB1dFwiKTtcbiAgc3RhZ2VJbnB1dC5jbGFzc0xpc3QuYWRkKFwic3RhZ2UtaW5wdXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWJ1dHRvblwiKTtcblxuICBmb3JtLm1ldGhvZCA9IFwiZGlhbG9nXCI7XG4gIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJub25lXCI7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN0YWdlSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb2JqZWN0LmFkZFRhc2soXG4gICAgICB0aXRsZUlucHV0LnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgIHByaW9yaXR5SW5wdXQudmFsdWUsXG4gICAgICBzdGFnZUlucHV0LnZhbHVlXG4gICAgKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIGNvbnNvbGUubG9nKGNvbnRhaW5lci5wcm9qZWN0TGlzdCk7XG4gIH0pO1xuICByZXR1cm4gZm9ybTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdGF0aWNQYWdlKCkge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzaWRlQmFyTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzaWRlQmFySG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNpZGVCYXJQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG5cbiAgZGlhbG9nLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWRpYWxvZ1wiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIHNpZGVCYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtY29udGFpbmVyXCIpO1xuICBzaWRlQmFySG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1idXR0b25cIik7XG4gIHNpZGVCYXJQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtYnV0dG9uXCIpO1xuICBzaWRlQmFyTm90ZXMuY2xhc3NMaXN0LmFkZChcIm5vdGVzLWJ1dHRvblwiKTtcblxuICBzaWRlQmFyLmFwcGVuZENoaWxkKHNpZGVCYXJIb21lKTtcbiAgc2lkZUJhci5hcHBlbmRDaGlsZChzaWRlQmFyUHJvamVjdHMpO1xuICBzaWRlQmFyLmFwcGVuZENoaWxkKHNpZGVCYXJOb3Rlcyk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuXG4gIHNpZGVCYXJIb21lLmlubmVySFRNTCA9IFwiaG9tZVwiO1xuICBzaWRlQmFyTm90ZXMuaW5uZXJIVE1MID0gXCJub3RlXCI7XG4gIHNpZGVCYXJQcm9qZWN0cy5pbm5lckhUTUwgPSBcInByb2plY3RcIjtcbiAgcmV0dXJuIG1haW5Db250YWluZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gbm90ZXNQYWdlKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWNvbnRhaW5lclwiKTtcbiAgY29uc3Qgbm90ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1kaWFsb2dcIik7XG4gIGNvbnN0IG5ld05vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdOb3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXctbm90ZVwiLCBcIm5ldy1idXR0b25cIik7XG4gIG5vdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5vdGUtY29udGFpbmVyXCIpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld05vdGVCdXR0b24pO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVDb250YWluZXIpO1xuICByZW5kZXJOb3RlcygpO1xuICBuZXdOb3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZERpYWxvZyhub3RlRm9ybSgpLCBkaWFsb2cpO1xuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0c1BhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtY29udGFpbmVyXCIpO1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWRpYWxvZ1wiKTtcbiAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdFwiLCBcIm5ldy1idXR0b25cIik7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ1dHRvbik7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiYnVnZ2VkXCIpO1xuICAgIGxvYWREaWFsb2cocHJvamVjdEZvcm0oKSwgZGlhbG9nKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1kaWFsb2dcIik7XG4gIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGFpbmVyLnByb2plY3RMaXN0LmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJvamVjdENvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kaXZcIik7XG4gICAgcHJvamVjdFRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlLWRpdlwiKTtcbiAgICBwcm9qZWN0Q29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250ZW50LWRpdlwiKTtcbiAgICBuZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXctdGFzay1idXR0b25cIik7XG5cbiAgICBwcm9qZWN0RGl2LmRhdGFzZXQuaW5kZXggPSBjb250YWluZXIucHJvamVjdExpc3QuaW5kZXhPZihvYmplY3QpO1xuXG4gICAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJidWcgaGVyZVwiKTtcbiAgICAgIGxvYWREaWFsb2codGFza0Zvcm0ob2JqZWN0KSwgZGlhbG9nKTtcbiAgICB9KTtcblxuICAgIG9iamVjdC50YXNrcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHRhc2tDaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1kaXZcIik7XG4gICAgICB0YXNrQ2hlY2tCb3guY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIik7XG4gICAgICB0YXNrTGFiZWwuY2xhc3NMaXN0LmFkZChcInRhc2stbGFiZWxcIik7XG5cbiAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0NoZWNrQm94KTtcbiAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcblxuICAgICAgcHJvamVjdENvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZURpdik7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudERpdik7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9uKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHJlbmRlck5vdGVzKCkge1xuICBjb25zdCBub3RlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1jb250YWluZXJcIik7XG4gIG5vdGVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGFpbmVyLm5vdGVMaXN0LmZvckVhY2goKG5vdGVzKSA9PiB7XG4gICAgY29uc3Qgbm90ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBub3RlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBub3RlRGl2LmNsYXNzTGlzdC5hZGQoXCJub3RlLWRpdlwiKTtcbiAgICBub3RlVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5vdGUtdGl0bGVcIik7XG4gICAgbm90ZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm5vdGUtY29udGVudFwiKTtcblxuICAgIG5vdGVEaXYuZGF0YXNldC5pbmRleCA9IGNvbnRhaW5lci5ub3RlTGlzdC5pbmRleE9mKG9iamVjdCk7XG5cbiAgICBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGVUaXRsZSk7XG4gICAgbm90ZURpdi5hcHBlbmRDaGlsZChub3RlQ29udGVudCk7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlRGl2KTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVDb250YWluZXIpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZVVwZGF0ZShlbGVtZW50LCBvYmplY3QsIGxpc3QpIHtcbiAgZWxlbWVudC5kYXRhc2V0LmluZGV4ID0gY29udGVudC5saXN0LmluZGV4T2Yob2JqZWN0KTtcbn1cbiIsImltcG9ydCB7IHN0YXRpY1BhZ2UsIHByb2plY3RzUGFnZSwgbm90ZXNQYWdlLCByZW5kZXJQcm9qZWN0cyB9IGZyb20gXCIuL3JlbmRlclwiO1xuc3RhdGljUGFnZSgpO1xuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1jb250YWluZXJcIik7XG5jb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1idXR0b25cIik7XG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLWJ1dHRvblwiKTtcbmNvbnN0IG5vdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzLWJ1dHRvblwiKTtcbnByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBwcm9qZWN0c1BhZ2UoKTtcbiAgcmVuZGVyUHJvamVjdHMoKTtcbn0pO1xubm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIG5vdGVzUGFnZSgpO1xufSk7XG4iXSwibmFtZXMiOlsidGFzayIsImNvbnN0cnVjdG9yIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInN0YWdlIiwidGhpcyIsImVkaXRUYXNrIiwicHJvamVjdCIsInRhc2tzIiwiZWRpdFByb2plY3QiLCJhZGRUYXNrIiwicHVzaCIsInJlbW92ZVRhc2siLCJzcGxpY2UiLCJ2aWV3VGFzayIsImNvbnNvbGUiLCJsb2ciLCJjb21wbGV0ZVRhc2siLCJub3RlIiwiY29udGVudCIsImVkaXROb3RlIiwiY29udGFpbmVyIiwicHJvamVjdExpc3QiLCJub3RlTGlzdCIsImFkZE5vdGUiLCJhZGRQcm9qZWN0IiwicmVtb3ZlTm90ZSIsImluZGV4IiwicmVtb3ZlUHJvamVjdCIsIm15Q29udGFpbmVyIiwibG9hZERpYWxvZyIsInBhZ2UiLCJkaWFsb2ciLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsInNob3dNb2RhbCIsInJlbmRlclByb2plY3RzIiwicHJvamVjdENvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvckVhY2giLCJvYmplY3QiLCJwcm9qZWN0RGl2IiwiY3JlYXRlRWxlbWVudCIsInByb2plY3RUaXRsZURpdiIsInByb2plY3RDb250ZW50RGl2IiwibmV3VGFza0J1dHRvbiIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJpbmRleE9mIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm0iLCJ0aXRsZUlucHV0IiwiZGVzY3JpcHRpb25JbnB1dCIsImR1ZURhdGVJbnB1dCIsInByaW9yaXR5SW5wdXQiLCJzdGFnZUlucHV0Iiwic3VibWl0QnV0dG9uIiwibWV0aG9kIiwidHlwZSIsInZhbHVlIiwidGFza0Zvcm0iLCJlbGVtZW50IiwidGFza0RpdiIsInRhc2tDaGVja0JveCIsInRhc2tMYWJlbCIsInJlbmRlck5vdGVzIiwibm90ZUNvbnRhaW5lciIsImNvbnRlbnRDb250YWluZXIiLCJub3RlcyIsIm5vdGVEaXYiLCJub3RlVGl0bGUiLCJub3RlQ29udGVudCIsIm1haW5Db250YWluZXIiLCJoZWFkZXIiLCJzaWRlQmFyIiwic2lkZUJhck5vdGVzIiwic2lkZUJhckhvbWUiLCJzaWRlQmFyUHJvamVjdHMiLCJzdGF0aWNQYWdlIiwicHJvamVjdEJ1dHRvbiIsIm5vdGVCdXR0b24iLCJuZXdQcm9qZWN0QnV0dG9uIiwicHJvamVjdEZvcm0iLCJwcm9qZWN0c1BhZ2UiLCJuZXdOb3RlQnV0dG9uIiwiY29udGVudElucHV0Iiwibm90ZUZvcm0iLCJub3Rlc1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9