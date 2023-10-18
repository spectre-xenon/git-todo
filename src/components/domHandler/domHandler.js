import renderProject from "./components/renderProject";
import renderTodo from "./components/renderTodo";

const projectContainer = document.getElementById("projectsContainer");
const todoContainer = document.getElementById("todoContainer");

function renderDOM(projectArr) {
  projectContainer.textContent = "";
  todoContainer.textContent = "";
  projectArr.forEach((project) => {
    renderProject(projectContainer, project);
    project.todos.sort((todo1, todo2) => {
      const priorities = { high: 2, normal: 1, low: 0 };

      const a = priorities[todo1.priority];
      const b = priorities[todo2.priority];

      return b - a;
    });

    project.todos.forEach((todo) => {
      renderTodo(todoContainer, todo);
    });
  });
}

export default renderDOM;
