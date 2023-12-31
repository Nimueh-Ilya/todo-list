(()=>{"use strict";class e{constructor(e,t,n,d,i){this.title=e,this.description=t,this.dueDate=n,this.priority=d,this.stage=i}editTask(e,t,n,d,i){this.title=e,this.description=t,this.dueDate=n,this.priority=d,this.stage=i}}class t{constructor(e){this.title=e,this.tasks=[]}editProject(e){this.title=e}addTask(t,n,d,i,c){this.tasks.push(new e(t,n,d,i,c))}removeTask(e){this.tasks.splice(e,1)}viewTask(){console.log("view task")}completeTask(e){e.stage=!e.stage}}class n{constructor(e,t){this.title=e,this.content=t}editNote(e,t){this.title=e,this.content=t}}const d=function(){const e=[],d=[];return{addNote:function(e,t){d.push(new n(e,t))},addProject:function(n){e.push(new t(n))},removeNote:function(e){d.splice(e,1)},removeProject:function(t){e.splice(t,1)},projectList:e,noteList:d}}();function i(e,t){t.innerHTML="",t.appendChild(e),t.showModal()}function c(){const e=document.querySelector(".project-container"),t=document.querySelector(".content-dialog");e.innerHTML="",d.projectList.forEach((n=>{const a=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),r=document.createElement("button"),u=document.createElement("button");a.classList.add("project-div"),o.classList.add("project-title-div"),s.classList.add("project-content-div"),r.classList.add("new-task-button"),a.dataset.index=d.projectList.indexOf(n),r.addEventListener("click",(()=>{i(function(e){const t=document.createElement("form"),n=document.createElement("input"),d=document.createElement("textarea"),i=document.createElement("input"),a=document.createElement("input"),o=document.createElement("input"),s=document.createElement("button");return t.classList.add("project-form"),n.classList.add("title-input"),d.classList.add("description-input"),i.classList.add("dueDate-input"),a.classList.add("priority-input"),o.classList.add("stage-input"),s.classList.add("submit-button"),n.required=!0,d.required=!0,i.required=!0,a.required=!0,o.required=!0,t.method="dialog",s.type="none",t.appendChild(n),t.appendChild(d),t.appendChild(i),t.appendChild(a),t.appendChild(o),t.appendChild(s),s.addEventListener("click",(()=>{n.value&&(e.addTask(n.value,d.value,i.value,a.value,o.value),c())})),t}(n),t)})),u.addEventListener("click",(()=>{d.removeProject(a.dataset.index),c()})),n.tasks.forEach((e=>{const t=document.createElement("div"),n=document.createElement("input"),d=document.createElement("label");t.classList.add("task-div"),n.classList.add("task-checkbox"),d.classList.add("task-label"),d.innerText=e.title,n.type="checkbox",n.checked&&(e.stage=!0),t.appendChild(n),t.appendChild(d),s.appendChild(t)})),o.innerHTML=n.title,l.appendChild(r),l.appendChild(u),a.appendChild(o),a.appendChild(s),a.appendChild(l),e.appendChild(a)}))}function a(){const e=document.querySelector(".note-container"),t=document.querySelector(".content-container");e.innerHTML="",d.noteList.forEach((n=>{const i=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),s=document.createElement("button");i.classList.add("note-div"),c.classList.add("note-title"),o.classList.add("note-content"),s.classList.add("delete-note-button","new-button"),i.dataset.index=d.noteList.indexOf(n),c.innerText=n.title,o.innerText=n.content,s.innerText="Delete Note",s.addEventListener("click",(()=>{d.removeNote(i.dataset.index),a()})),i.appendChild(c),i.appendChild(o),i.appendChild(s),e.appendChild(i),t.appendChild(e)}))}!function(){const e=document.querySelector(".main-container"),t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),a=document.createElement("dialog");a.classList.add("content-dialog"),t.classList.add("header"),n.classList.add("sidebar"),d.classList.add("content-container"),c.classList.add("projects-button"),i.classList.add("notes-button"),n.appendChild(sideBarHome),n.appendChild(c),n.appendChild(i),e.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(d),sideBarHome.innerHTML="home",i.innerHTML="note",c.innerHTML="project"}();const o=document.querySelector(".content-container"),s=document.querySelector(".projects-button"),l=document.querySelector(".notes-button");s.addEventListener("click",(()=>{o.innerHTML="",function(){const e=document.querySelector(".content-container"),t=document.createElement("div"),n=document.querySelector(".content-dialog"),a=document.createElement("button");t.classList.add("project-container"),a.classList.add("new-project","new-button"),e.appendChild(a),e.appendChild(t),a.addEventListener("click",(()=>{i(function(){const e=document.createElement("form"),t=document.createElement("input"),n=document.createElement("button");return t.required=!0,e.method="dialog",n.type="submit",e.classList.add("project-form"),t.classList.add("title-input"),n.classList.add("submit-button"),e.appendChild(t),e.appendChild(n),n.addEventListener("click",(()=>{t.value&&(d.addProject(t.value),c())})),e}(),n),c()}))}(),c()})),l.addEventListener("click",(()=>{o.innerHTML="",function(){const e=document.querySelector(".content-container"),t=document.createElement("div"),n=document.querySelector(".content-dialog"),c=document.createElement("button");c.classList.add("new-note","new-button"),t.classList.add("note-container"),e.appendChild(c),e.appendChild(t),a(),c.addEventListener("click",(()=>{i(function(){const e=document.createElement("form"),t=document.createElement("input"),n=document.createElement("textarea"),i=document.createElement("button");return t.required=!0,n.required=!0,e.method="dialog",i.type="submit",e.classList.add("note-form"),t.classList.add("title-input"),n.classList.add("content-input"),i.classList.add("submit-button"),e.appendChild(t),e.appendChild(n),e.appendChild(i),i.addEventListener("click",(()=>{t.value&&n.value&&(d.addNote(t.value,n.value),a())})),e}(),n)}))}()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTSyxjQUFjLFNBQ3BDa0QsRUFBZXZELFNBQVNLLGNBQWMsWUFDdENpQixFQUFldEIsU0FBU0ssY0FBYyxVQXFCNUMsT0FwQkFZLEVBQVdNLFVBQVcsRUFDdEJnQyxFQUFhaEMsVUFBVyxFQUV4QlAsRUFBS1EsT0FBUyxTQUNkRixFQUFhRyxLQUFPLFNBQ3BCVCxFQUFLTCxVQUFVQyxJQUFJLGFBQ25CSyxFQUFXTixVQUFVQyxJQUFJLGVBQ3pCMkMsRUFBYTVDLFVBQVVDLElBQUksaUJBQzNCVSxFQUFhWCxVQUFVQyxJQUFJLGlCQUMzQkksRUFBS3BCLFlBQVlxQixHQUNqQkQsRUFBS3BCLFlBQVkyRCxHQUNqQnZDLEVBQUtwQixZQUFZMEIsR0FDakJBLEVBQWFQLGlCQUFpQixTQUFTLEtBQ2pDRSxFQUFXUyxPQUFTNkIsRUFBYTdCLFFBQ25DM0MsRUFBVUcsUUFBUStCLEVBQVdTLE1BQU82QixFQUFhN0IsT0FDakRRLElBR0YsSUFFS2xCLENBQ1QsQ0FtSGV3QyxHQUFZOUQsRUFBTyxHQUVsQyxDQzVJRStELEVBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ub3RlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIHRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGFnZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5zdGFnZSA9IHN0YWdlO1xuICB9XG4gIGVkaXRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YWdlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnN0YWdlID0gc3RhZ2U7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBwcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG4gIGVkaXRQcm9qZWN0KHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB9XG4gIGFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhZ2UpIHtcbiAgICB0aGlzLnRhc2tzLnB1c2gobmV3IHRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhZ2UpKTtcbiAgfVxuICByZW1vdmVUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzLnNwbGljZSh0YXNrLCAxKTtcbiAgfVxuICB2aWV3VGFzaygpIHtcbiAgICBjb25zb2xlLmxvZyhcInZpZXcgdGFza1wiKTtcbiAgfVxuICBjb21wbGV0ZVRhc2sodGFzaykge1xuICAgIHRhc2suc3RhZ2UgPSAhdGFzay5zdGFnZTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIG5vdGUge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgY29udGVudCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG4gIGVkaXROb3RlKHRpdGxlLCBjb250ZW50KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBub3RlIH0gZnJvbSBcIi4vbm90ZVwiO1xuZXhwb3J0IGNvbnN0IG15Q29udGFpbmVyID0gZnVuY3Rpb24gY29udGFpbmVyKCkge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuICBjb25zdCBub3RlTGlzdCA9IFtdO1xuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XG4gICAgcHJvamVjdExpc3QucHVzaChuZXcgcHJvamVjdCh0aXRsZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpbmRleCkge1xuICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkTm90ZSh0aXRsZSwgY29udGVudCkge1xuICAgIG5vdGVMaXN0LnB1c2gobmV3IG5vdGUodGl0bGUsIGNvbnRlbnQpKTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVOb3RlKGluZGV4KSB7XG4gICAgbm90ZUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkTm90ZSxcbiAgICBhZGRQcm9qZWN0LFxuICAgIHJlbW92ZU5vdGUsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBwcm9qZWN0TGlzdCxcbiAgICBub3RlTGlzdCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBteUNvbnRhaW5lciB9IGZyb20gXCIuL2NvbnRhaW5lclwiO1xuaW1wb3J0IHsgbm90ZSB9IGZyb20gXCIuL25vdGVcIjtcbmltcG9ydCB7IHByb2plY3QsIHRhc2sgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5jb25zdCBjb250YWluZXIgPSBteUNvbnRhaW5lcigpO1xuZnVuY3Rpb24gbG9hZERpYWxvZyhwYWdlLCBkaWFsb2cpIHtcbiAgZGlhbG9nLmlubmVySFRNTCA9IFwiXCI7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChwYWdlKTtcbiAgZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuZnVuY3Rpb24gbm90ZUZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgY29udGVudElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgY29udGVudElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICBmb3JtLm1ldGhvZCA9IFwiZGlhbG9nXCI7XG4gIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwibm90ZS1mb3JtXCIpO1xuICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1pbnB1dFwiKTtcbiAgY29udGVudElucHV0LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWlucHV0XCIpO1xuICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idXR0b25cIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY29udGVudElucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSAmJiBjb250ZW50SW5wdXQudmFsdWUpIHtcbiAgICAgIGNvbnRhaW5lci5hZGROb3RlKHRpdGxlSW5wdXQudmFsdWUsIGNvbnRlbnRJbnB1dC52YWx1ZSk7XG4gICAgICByZW5kZXJOb3RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZvcm07XG59XG5mdW5jdGlvbiBwcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZm9ybS5tZXRob2QgPSBcImRpYWxvZ1wiO1xuICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybVwiKTtcbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGl0bGUtaW5wdXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWJ1dHRvblwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSkge1xuICAgICAgY29udGFpbmVyLmFkZFByb2plY3QodGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZm9ybTtcbn1cbmZ1bmN0aW9uIHRhc2tGb3JtKG9iamVjdCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3Qgc3RhZ2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvcm1cIik7XG4gIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRpdGxlLWlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1pbnB1dFwiKTtcbiAgZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkdWVEYXRlLWlucHV0XCIpO1xuICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1pbnB1dFwiKTtcbiAgc3RhZ2VJbnB1dC5jbGFzc0xpc3QuYWRkKFwic3RhZ2UtaW5wdXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWJ1dHRvblwiKTtcblxuICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZGVzY3JpcHRpb25JbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHByaW9yaXR5SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBzdGFnZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICBmb3JtLm1ldGhvZCA9IFwiZGlhbG9nXCI7XG4gIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJub25lXCI7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN0YWdlSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHRpdGxlSW5wdXQudmFsdWUpIHtcbiAgICAgIG9iamVjdC5hZGRUYXNrKFxuICAgICAgICB0aXRsZUlucHV0LnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICAgIHByaW9yaXR5SW5wdXQudmFsdWUsXG4gICAgICAgIHN0YWdlSW5wdXQudmFsdWVcbiAgICAgICk7XG4gICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZvcm07XG59XG5leHBvcnQgZnVuY3Rpb24gc3RhdGljUGFnZSgpIHtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2lkZUJhck5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBzaWRlQmFyUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuXG4gIGRpYWxvZy5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1kaWFsb2dcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWNvbnRhaW5lclwiKTtcblxuICBzaWRlQmFyUHJvamVjdHMuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWJ1dHRvblwiKTtcbiAgc2lkZUJhck5vdGVzLmNsYXNzTGlzdC5hZGQoXCJub3Rlcy1idXR0b25cIik7XG5cbiAgc2lkZUJhci5hcHBlbmRDaGlsZChzaWRlQmFySG9tZSk7XG4gIHNpZGVCYXIuYXBwZW5kQ2hpbGQoc2lkZUJhclByb2plY3RzKTtcbiAgc2lkZUJhci5hcHBlbmRDaGlsZChzaWRlQmFyTm90ZXMpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpYWxvZyk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQmFyKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcblxuICBzaWRlQmFySG9tZS5pbm5lckhUTUwgPSBcImhvbWVcIjtcbiAgc2lkZUJhck5vdGVzLmlubmVySFRNTCA9IFwibm90ZVwiO1xuICBzaWRlQmFyUHJvamVjdHMuaW5uZXJIVE1MID0gXCJwcm9qZWN0XCI7XG4gIHJldHVybiBtYWluQ29udGFpbmVyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5vdGVzUGFnZSgpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1jb250YWluZXJcIik7XG4gIGNvbnN0IG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtZGlhbG9nXCIpO1xuICBjb25zdCBuZXdOb3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3Tm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3LW5vdGVcIiwgXCJuZXctYnV0dG9uXCIpO1xuICBub3RlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJub3RlLWNvbnRhaW5lclwiKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdOb3RlQnV0dG9uKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlQ29udGFpbmVyKTtcbiAgcmVuZGVyTm90ZXMoKTtcbiAgbmV3Tm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWREaWFsb2cobm90ZUZvcm0oKSwgZGlhbG9nKTtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdHNQYWdlKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWNvbnRhaW5lclwiKTtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1kaWFsb2dcIik7XG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgbmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3RcIiwgXCJuZXctYnV0dG9uXCIpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG4gIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkRGlhbG9nKHByb2plY3RGb3JtKCksIGRpYWxvZyk7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtZGlhbG9nXCIpO1xuICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnRhaW5lci5wcm9qZWN0TGlzdC5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3RDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kaXZcIik7XG4gICAgcHJvamVjdFRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlLWRpdlwiKTtcbiAgICBwcm9qZWN0Q29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250ZW50LWRpdlwiKTtcbiAgICBuZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXctdGFzay1idXR0b25cIik7XG5cbiAgICBwcm9qZWN0RGl2LmRhdGFzZXQuaW5kZXggPSBjb250YWluZXIucHJvamVjdExpc3QuaW5kZXhPZihvYmplY3QpO1xuXG4gICAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbG9hZERpYWxvZyh0YXNrRm9ybShvYmplY3QpLCBkaWFsb2cpO1xuICAgIH0pO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVQcm9qZWN0KHByb2plY3REaXYuZGF0YXNldC5pbmRleCk7XG4gICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIH0pO1xuXG4gICAgb2JqZWN0LnRhc2tzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgdGFza0NoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4gICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRpdlwiKTtcbiAgICAgIHRhc2tDaGVja0JveC5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja2JveFwiKTtcbiAgICAgIHRhc2tMYWJlbC5jbGFzc0xpc3QuYWRkKFwidGFzay1sYWJlbFwiKTtcblxuICAgICAgdGFza0xhYmVsLmlubmVyVGV4dCA9IGVsZW1lbnQudGl0bGU7XG4gICAgICB0YXNrQ2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuICAgICAgaWYgKHRhc2tDaGVja0JveC5jaGVja2VkKSB7XG4gICAgICAgIGVsZW1lbnQuc3RhZ2UgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tDaGVja0JveCk7XG4gICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG5cbiAgICAgIHByb2plY3RDb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgIH0pO1xuICAgIHByb2plY3RUaXRsZURpdi5pbm5lckhUTUwgPSBvYmplY3QudGl0bGU7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b24pO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZURpdik7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudERpdik7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gIH0pO1xufVxuZnVuY3Rpb24gcmVuZGVyTm90ZXMoKSB7XG4gIGNvbnN0IG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGUtY29udGFpbmVyXCIpO1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWNvbnRhaW5lclwiKTtcbiAgbm90ZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250YWluZXIubm90ZUxpc3QuZm9yRWFjaCgobm90ZXMpID0+IHtcbiAgICBjb25zdCBub3RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5vdGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZWxldGVOb3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIG5vdGVEaXYuY2xhc3NMaXN0LmFkZChcIm5vdGUtZGl2XCIpO1xuICAgIG5vdGVUaXRsZS5jbGFzc0xpc3QuYWRkKFwibm90ZS10aXRsZVwiKTtcbiAgICBub3RlQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibm90ZS1jb250ZW50XCIpO1xuICAgIGRlbGV0ZU5vdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1ub3RlLWJ1dHRvblwiLCBcIm5ldy1idXR0b25cIik7XG5cbiAgICBub3RlRGl2LmRhdGFzZXQuaW5kZXggPSBjb250YWluZXIubm90ZUxpc3QuaW5kZXhPZihub3Rlcyk7XG5cbiAgICBub3RlVGl0bGUuaW5uZXJUZXh0ID0gbm90ZXMudGl0bGU7XG4gICAgbm90ZUNvbnRlbnQuaW5uZXJUZXh0ID0gbm90ZXMuY29udGVudDtcbiAgICBkZWxldGVOb3RlQnV0dG9uLmlubmVyVGV4dCA9IFwiRGVsZXRlIE5vdGVcIjtcblxuICAgIGRlbGV0ZU5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVOb3RlKG5vdGVEaXYuZGF0YXNldC5pbmRleCk7XG4gICAgICByZW5kZXJOb3RlcygpO1xuICAgIH0pO1xuXG4gICAgbm90ZURpdi5hcHBlbmRDaGlsZChub3RlVGl0bGUpO1xuICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZUNvbnRlbnQpO1xuICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlTm90ZUJ1dHRvbik7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlRGl2KTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVDb250YWluZXIpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZVVwZGF0ZShlbGVtZW50LCBvYmplY3QsIGxpc3QpIHtcbiAgZWxlbWVudC5kYXRhc2V0LmluZGV4ID0gY29udGVudC5saXN0LmluZGV4T2Yob2JqZWN0KTtcbn1cbiIsImltcG9ydCB7IHN0YXRpY1BhZ2UsIHByb2plY3RzUGFnZSwgbm90ZXNQYWdlLCByZW5kZXJQcm9qZWN0cyB9IGZyb20gXCIuL3JlbmRlclwiO1xuc3RhdGljUGFnZSgpO1xuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1jb250YWluZXJcIik7XG5jb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1idXR0b25cIik7XG5jb25zdCBub3RlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Rlcy1idXR0b25cIik7XG5wcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgcHJvamVjdHNQYWdlKCk7XG4gIHJlbmRlclByb2plY3RzKCk7XG59KTtcbm5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBub3Rlc1BhZ2UoKTtcbn0pO1xuIl0sIm5hbWVzIjpbInRhc2siLCJjb25zdHJ1Y3RvciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJzdGFnZSIsInRoaXMiLCJlZGl0VGFzayIsInByb2plY3QiLCJ0YXNrcyIsImVkaXRQcm9qZWN0IiwiYWRkVGFzayIsInB1c2giLCJyZW1vdmVUYXNrIiwic3BsaWNlIiwidmlld1Rhc2siLCJjb25zb2xlIiwibG9nIiwiY29tcGxldGVUYXNrIiwibm90ZSIsImNvbnRlbnQiLCJlZGl0Tm90ZSIsImNvbnRhaW5lciIsInByb2plY3RMaXN0Iiwibm90ZUxpc3QiLCJhZGROb3RlIiwiYWRkUHJvamVjdCIsInJlbW92ZU5vdGUiLCJpbmRleCIsInJlbW92ZVByb2plY3QiLCJteUNvbnRhaW5lciIsImxvYWREaWFsb2ciLCJwYWdlIiwiZGlhbG9nIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJzaG93TW9kYWwiLCJyZW5kZXJQcm9qZWN0cyIsInByb2plY3RDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwib2JqZWN0IiwicHJvamVjdERpdiIsImNyZWF0ZUVsZW1lbnQiLCJwcm9qZWN0VGl0bGVEaXYiLCJwcm9qZWN0Q29udGVudERpdiIsImZvb3RlciIsIm5ld1Rhc2tCdXR0b24iLCJkZWxldGVQcm9qZWN0QnV0dG9uIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsImluZGV4T2YiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybSIsInRpdGxlSW5wdXQiLCJkZXNjcmlwdGlvbklucHV0IiwiZHVlRGF0ZUlucHV0IiwicHJpb3JpdHlJbnB1dCIsInN0YWdlSW5wdXQiLCJzdWJtaXRCdXR0b24iLCJyZXF1aXJlZCIsIm1ldGhvZCIsInR5cGUiLCJ2YWx1ZSIsInRhc2tGb3JtIiwiZWxlbWVudCIsInRhc2tEaXYiLCJ0YXNrQ2hlY2tCb3giLCJ0YXNrTGFiZWwiLCJpbm5lclRleHQiLCJjaGVja2VkIiwicmVuZGVyTm90ZXMiLCJub3RlQ29udGFpbmVyIiwiY29udGVudENvbnRhaW5lciIsIm5vdGVzIiwibm90ZURpdiIsIm5vdGVUaXRsZSIsIm5vdGVDb250ZW50IiwiZGVsZXRlTm90ZUJ1dHRvbiIsIm1haW5Db250YWluZXIiLCJoZWFkZXIiLCJzaWRlQmFyIiwic2lkZUJhck5vdGVzIiwic2lkZUJhclByb2plY3RzIiwic2lkZUJhckhvbWUiLCJzdGF0aWNQYWdlIiwicHJvamVjdEJ1dHRvbiIsIm5vdGVCdXR0b24iLCJuZXdQcm9qZWN0QnV0dG9uIiwicHJvamVjdEZvcm0iLCJwcm9qZWN0c1BhZ2UiLCJuZXdOb3RlQnV0dG9uIiwiY29udGVudElucHV0Iiwibm90ZUZvcm0iLCJub3Rlc1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9