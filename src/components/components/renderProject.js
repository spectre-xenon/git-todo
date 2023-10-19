import { deleteProject, getProjectArr, setFocusedProject } from "../Project";
import "./project.css";
import { renderTodo, emptyTodoContainer } from "./renderTodo";

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
  projectDiv.addEventListener("click", () => {
    emptyTodoContainer();
    setFocusedProject(project.title);
    // Todo: move this function to (create,remove,edit todo functions)
    project.todos.sort((todo1, todo2) => {
      const priorities = { high: 2, normal: 1, low: 0 };

      const a = priorities[todo1.priority];
      const b = priorities[todo2.priority];

      return b - a;
    });

    project.todos.forEach((todo) => {
      renderTodo(todo);
    });
  });

  projectDivDelete.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteProject(project.title);
    console.log(getProjectArr());
  });

  projectDiv.appendChild(projectDivTitle);
  projectDiv.appendChild(projectDivDelete);

  projectContainer.appendChild(projectDiv);
}

export { emptyProjectContainer, renderProject };
