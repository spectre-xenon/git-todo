import { deleteProject, setFocusedProject } from "../Project";
import "./project.css";
import { emptyTodoContainer, updateProgress } from "./renderTodo";

const projectContainer = document.getElementById("projectsContainer");

function emptyProjectContainer() {
  projectContainer.textContent = "";
}

function renderProject(project) {
  const projectDiv = document.createElement("div");
  const projectDivTitle = document.createElement("p");
  const projectDivDelete = document.createElement("span");

  projectDiv.classList.add("project");
  projectDivDelete.classList.add("material-symbols-rounded");

  projectDivTitle.textContent = project.title;
  projectDivDelete.textContent = "delete";

  // Adding functionality
  if (project.focused) {
    projectDiv.style.filter = "brightness(110%)";
  }

  projectDiv.addEventListener("click", () => {
    emptyTodoContainer();
    setFocusedProject(project.title);
  });

  projectDivDelete.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteProject(project.title);
    updateProgress();
  });

  projectDiv.appendChild(projectDivTitle);
  projectDiv.appendChild(projectDivDelete);

  projectContainer.appendChild(projectDiv);
}

export { emptyProjectContainer, renderProject };
