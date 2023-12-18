(()=>{"use strict";class t{constructor(t,e,n,c,o){this.title=t,this.description=e,this.dueDate=n,this.priority=c,this.stage=o}editTask(t,e,n,c,o){this.title=t,this.description=e,this.dueDate=n,this.priority=c,this.stage=o}}class e{constructor(t){this.title=t,this.tasks=[]}editProject(t){this.title=t}addTask(e,n,c,o,s){this.tasks.push(new t(e,n,c,o,s))}removeTask(t){this.tasks.splice(t,1)}viewTask(){console.log("view task")}completeTask(t){t.stage=!t.stage}}class n{constructor(t,e){this.title=t,this.content=e}editNote(t,e){this.title=t,this.content=e}}function c(){const t=[],c=[];return{addNote:function(t,e){c.push(new n(t,e))},addProject:function(n){t.push(new e(n))},removeNote:function(t){c.splice(t,1)},removeProject:function(e){t.splice(e,1)},projectList:t,noteList:c}}!function(){const t=document.querySelector(".main-container"),e=document.createElement("div"),n=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div"),i=document.createElement("div");e.classList.add("header"),n.classList.add("sidebar"),c.classList.add("content-container"),s.classList.add("home-button"),i.classList.add("projects-button"),o.classList.add("notes-button"),n.appendChild(s),n.appendChild(i),n.appendChild(o),t.appendChild(e),t.appendChild(n),t.appendChild(c)}();const o=document.querySelector(".content-container"),s=document.querySelector(".projects-button"),i=(document.querySelector(".home-button"),document.querySelector(".notes-button"));s.addEventListener("click",(()=>{o.innerHTML="",function(){const t=document.querySelector(".content-container"),e=document.createElement("button");e.classList.add("new-project","new-button"),t.appendChild(e),e.addEventListener("click",(()=>{c().addProject("my project"),console.log(c().projectList)}))}()})),i.addEventListener("click",(()=>{o.innerHTML="",function(){const t=document.querySelector(".content-container"),e=document.createElement("button");e.classList.add("new-note","new-button"),t.appendChild(e),e.addEventListener("click",(()=>{c().addNote("my note","note content")}))}()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQU8sTUFBTUEsRUFDWCxXQUFBQyxDQUFZQyxFQUFPQyxFQUFhQyxFQUFTQyxFQUFVQyxHQUNqREMsS0FBS0wsTUFBUUEsRUFDYkssS0FBS0osWUFBY0EsRUFDbkJJLEtBQUtILFFBQVVBLEVBQ2ZHLEtBQUtGLFNBQVdBLEVBQ2hCRSxLQUFLRCxNQUFRQSxDQUNmLENBQ0EsUUFBQUUsQ0FBU04sRUFBT0MsRUFBYUMsRUFBU0MsRUFBVUMsR0FDOUNDLEtBQUtMLE1BQVFBLEVBQ2JLLEtBQUtKLFlBQWNBLEVBQ25CSSxLQUFLSCxRQUFVQSxFQUNmRyxLQUFLRixTQUFXQSxFQUNoQkUsS0FBS0QsTUFBUUEsQ0FDZixFQUVLLE1BQU1HLEVBQ1gsV0FBQVIsQ0FBWUMsR0FDVkssS0FBS0wsTUFBUUEsRUFDYkssS0FBS0csTUFBUSxFQUNmLENBQ0EsV0FBQUMsQ0FBWVQsR0FDVkssS0FBS0wsTUFBUUEsQ0FDZixDQUNBLE9BQUFVLENBQVFWLEVBQU9DLEVBQWFDLEVBQVNDLEVBQVVDLEdBQzdDQyxLQUFLRyxNQUFNRyxLQUFLLElBQUliLEVBQUtFLEVBQU9DLEVBQWFDLEVBQVNDLEVBQVVDLEdBQ2xFLENBQ0EsVUFBQVEsQ0FBV2QsR0FDVE8sS0FBS0csTUFBTUssT0FBT2YsRUFBTSxFQUMxQixDQUNBLFFBQUFnQixHQUNFQyxRQUFRQyxJQUFJLFlBQ2QsQ0FDQSxZQUFBQyxDQUFhbkIsR0FDWEEsRUFBS00sT0FBU04sRUFBS00sS0FDckIsRUNuQ0ssTUFBTWMsRUFDWCxXQUFBbkIsQ0FBWUMsRUFBT21CLEdBQ2pCZCxLQUFLTCxNQUFRQSxFQUNiSyxLQUFLYyxRQUFVQSxDQUNqQixDQUNBLFFBQUFDLENBQVNwQixFQUFPbUIsR0FDZGQsS0FBS0wsTUFBUUEsRUFDYkssS0FBS2MsUUFBVUEsQ0FDakIsRUNOSyxTQUFTRSxJQUNkLE1BQU1DLEVBQWMsR0FDZEMsRUFBVyxHQWVqQixNQUFPLENBQ0xDLFFBUkYsU0FBaUJ4QixFQUFPbUIsR0FDdEJJLEVBQVNaLEtBQUssSUFBSU8sRUFBS2xCLEVBQU9tQixHQUNoQyxFQU9FTSxXQWhCRixTQUFvQnpCLEdBQ2xCc0IsRUFBWVgsS0FBSyxJQUFJSixFQUFRUCxHQUMvQixFQWVFMEIsV0FQRixTQUFvQkMsR0FDbEJKLEVBQVNWLE9BQU9jLEVBQU8sRUFDekIsRUFNRUMsY0FkRixTQUF1QkQsR0FDckJMLEVBQVlULE9BQU9jLEVBQU8sRUFDNUIsRUFhRUwsY0FDQUMsV0FFSixFQ3ZCTyxXQUNMLE1BQU1NLEVBQWdCQyxTQUFTQyxjQUFjLG1CQUN2Q0MsRUFBU0YsU0FBU0csY0FBYyxPQUNoQ0MsRUFBVUosU0FBU0csY0FBYyxPQUNqQ0UsRUFBbUJMLFNBQVNHLGNBQWMsT0FDMUNHLEVBQWVOLFNBQVNHLGNBQWMsT0FDdENJLEVBQWNQLFNBQVNHLGNBQWMsT0FDckNLLEVBQWtCUixTQUFTRyxjQUFjLE9BRS9DRCxFQUFPTyxVQUFVQyxJQUFJLFVBQ3JCTixFQUFRSyxVQUFVQyxJQUFJLFdBQ3RCTCxFQUFpQkksVUFBVUMsSUFBSSxxQkFDL0JILEVBQVlFLFVBQVVDLElBQUksZUFDMUJGLEVBQWdCQyxVQUFVQyxJQUFJLG1CQUM5QkosRUFBYUcsVUFBVUMsSUFBSSxnQkFFM0JOLEVBQVFPLFlBQVlKLEdBQ3BCSCxFQUFRTyxZQUFZSCxHQUNwQkosRUFBUU8sWUFBWUwsR0FDcEJQLEVBQWNZLFlBQVlULEdBQzFCSCxFQUFjWSxZQUFZUCxHQUMxQkwsRUFBY1ksWUFBWU4sRUFHNUIsQ0N6QkFPLEdBQ0EsTUFBTVAsRUFBbUJMLFNBQVNDLGNBQWMsc0JBQzFDWSxFQUFnQmIsU0FBU0MsY0FBYyxvQkFFdkNhLEdBRGFkLFNBQVNDLGNBQWMsZ0JBQ3ZCRCxTQUFTQyxjQUFjLGtCQUMxQ1ksRUFBY0UsaUJBQWlCLFNBQVMsS0FDdENWLEVBQWlCVyxVQUFZLEdENkJ4QixXQUNMLE1BQU1YLEVBQW1CTCxTQUFTQyxjQUFjLHNCQUMxQ2dCLEVBQW1CakIsU0FBU0csY0FBYyxVQUNoRGMsRUFBaUJSLFVBQVVDLElBQUksY0FBZSxjQUM5Q0wsRUFBaUJNLFlBQVlNLEdBQzdCQSxFQUFpQkYsaUJBQWlCLFNBQVMsS0FDekN4QixJQUFZSSxXQUFXLGNBQ3ZCVixRQUFRQyxJQUFJSyxJQUFZQyxZQUFZLEdBRXhDLENDckNFMEIsRUFBYyxJQUVoQkosRUFBV0MsaUJBQWlCLFNBQVMsS0FDbkNWLEVBQWlCVyxVQUFZLEdEZ0J4QixXQUNMLE1BQU1YLEVBQW1CTCxTQUFTQyxjQUFjLHNCQUMxQ2tCLEVBQWdCbkIsU0FBU0csY0FBYyxVQUM3Q2dCLEVBQWNWLFVBQVVDLElBQUksV0FBWSxjQUN4Q0wsRUFBaUJNLFlBQVlRLEdBQzdCQSxFQUFjSixpQkFBaUIsU0FBUyxLQUN0Q3hCLElBQVlHLFFBQVEsVUFBVyxlQUFlLEdBRWxELENDdkJFMEIsRUFBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25vdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgdGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YWdlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnN0YWdlID0gc3RhZ2U7XG4gIH1cbiAgZWRpdFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhZ2UpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuc3RhZ2UgPSBzdGFnZTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIHByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cbiAgZWRpdFByb2plY3QodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cbiAgYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGFnZSkge1xuICAgIHRoaXMudGFza3MucHVzaChuZXcgdGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGFnZSkpO1xuICB9XG4gIHJlbW92ZVRhc2sodGFzaykge1xuICAgIHRoaXMudGFza3Muc3BsaWNlKHRhc2ssIDEpO1xuICB9XG4gIHZpZXdUYXNrKCkge1xuICAgIGNvbnNvbGUubG9nKFwidmlldyB0YXNrXCIpO1xuICB9XG4gIGNvbXBsZXRlVGFzayh0YXNrKSB7XG4gICAgdGFzay5zdGFnZSA9ICF0YXNrLnN0YWdlO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3Mgbm90ZSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBjb250ZW50KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cbiAgZWRpdE5vdGUodGl0bGUsIGNvbnRlbnQpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IG5vdGUgfSBmcm9tIFwiLi9ub3RlXCI7XG5leHBvcnQgZnVuY3Rpb24gY29udGFpbmVyKCkge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuICBjb25zdCBub3RlTGlzdCA9IFtdO1xuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XG4gICAgcHJvamVjdExpc3QucHVzaChuZXcgcHJvamVjdCh0aXRsZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpbmRleCkge1xuICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkTm90ZSh0aXRsZSwgY29udGVudCkge1xuICAgIG5vdGVMaXN0LnB1c2gobmV3IG5vdGUodGl0bGUsIGNvbnRlbnQpKTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVOb3RlKGluZGV4KSB7XG4gICAgbm90ZUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkTm90ZSxcbiAgICBhZGRQcm9qZWN0LFxuICAgIHJlbW92ZU5vdGUsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBwcm9qZWN0TGlzdCxcbiAgICBub3RlTGlzdCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IG5vdGUgfSBmcm9tIFwiLi9ub3RlXCI7XG5pbXBvcnQgeyBwcm9qZWN0LCB0YXNrIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIi4vY29udGFpbmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0aWNQYWdlKCkge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzaWRlQmFyTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzaWRlQmFySG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNpZGVCYXJQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIHNpZGVCYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtY29udGFpbmVyXCIpO1xuICBzaWRlQmFySG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1idXR0b25cIik7XG4gIHNpZGVCYXJQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtYnV0dG9uXCIpO1xuICBzaWRlQmFyTm90ZXMuY2xhc3NMaXN0LmFkZChcIm5vdGVzLWJ1dHRvblwiKTtcblxuICBzaWRlQmFyLmFwcGVuZENoaWxkKHNpZGVCYXJIb21lKTtcbiAgc2lkZUJhci5hcHBlbmRDaGlsZChzaWRlQmFyUHJvamVjdHMpO1xuICBzaWRlQmFyLmFwcGVuZENoaWxkKHNpZGVCYXJOb3Rlcyk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQmFyKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcblxuICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBub3Rlc1BhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtY29udGFpbmVyXCIpO1xuICBjb25zdCBuZXdOb3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3Tm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3LW5vdGVcIiwgXCJuZXctYnV0dG9uXCIpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld05vdGVCdXR0b24pO1xuICBuZXdOb3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29udGFpbmVyKCkuYWRkTm90ZShcIm15IG5vdGVcIiwgXCJub3RlIGNvbnRlbnRcIik7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RzUGFnZSgpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1jb250YWluZXJcIik7XG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdFwiLCBcIm5ldy1idXR0b25cIik7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ1dHRvbik7XG4gIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb250YWluZXIoKS5hZGRQcm9qZWN0KFwibXkgcHJvamVjdFwiKTtcbiAgICBjb25zb2xlLmxvZyhjb250YWluZXIoKS5wcm9qZWN0TGlzdCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIi4vY29udGFpbmVyXCI7XG5pbXBvcnQgeyBub3RlIH0gZnJvbSBcIi4vbm90ZVwiO1xuaW1wb3J0IHsgc3RhdGljUGFnZSwgcHJvamVjdHNQYWdlLCBub3Rlc1BhZ2UgfSBmcm9tIFwiLi9yZW5kZXJcIjtcbnN0YXRpY1BhZ2UoKTtcbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtY29udGFpbmVyXCIpO1xuY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtYnV0dG9uXCIpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1idXR0b25cIik7XG5jb25zdCBub3RlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Rlcy1idXR0b25cIik7XG5wcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgcHJvamVjdHNQYWdlKCk7XG59KTtcbm5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBub3Rlc1BhZ2UoKTtcbn0pO1xuIl0sIm5hbWVzIjpbInRhc2siLCJjb25zdHJ1Y3RvciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJzdGFnZSIsInRoaXMiLCJlZGl0VGFzayIsInByb2plY3QiLCJ0YXNrcyIsImVkaXRQcm9qZWN0IiwiYWRkVGFzayIsInB1c2giLCJyZW1vdmVUYXNrIiwic3BsaWNlIiwidmlld1Rhc2siLCJjb25zb2xlIiwibG9nIiwiY29tcGxldGVUYXNrIiwibm90ZSIsImNvbnRlbnQiLCJlZGl0Tm90ZSIsImNvbnRhaW5lciIsInByb2plY3RMaXN0Iiwibm90ZUxpc3QiLCJhZGROb3RlIiwiYWRkUHJvamVjdCIsInJlbW92ZU5vdGUiLCJpbmRleCIsInJlbW92ZVByb2plY3QiLCJtYWluQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwiY3JlYXRlRWxlbWVudCIsInNpZGVCYXIiLCJjb250ZW50Q29udGFpbmVyIiwic2lkZUJhck5vdGVzIiwic2lkZUJhckhvbWUiLCJzaWRlQmFyUHJvamVjdHMiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInN0YXRpY1BhZ2UiLCJwcm9qZWN0QnV0dG9uIiwibm90ZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lckhUTUwiLCJuZXdQcm9qZWN0QnV0dG9uIiwicHJvamVjdHNQYWdlIiwibmV3Tm90ZUJ1dHRvbiIsIm5vdGVzUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=