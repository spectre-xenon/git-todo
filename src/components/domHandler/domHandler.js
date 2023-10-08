import renderProject from "./components/renderProject";
import renderTodo from "./components/renderTodo";

const projectContainer = document.getElementById("projectsContainer");
const todoContainer = document.getElementById("todoContainer");

function renderDOM(projectArr) {
  projectArr.forEach((project) => {
    renderProject(projectContainer, project);

    project.todos.forEach((todo) => {
      renderTodo(todoContainer, todo);
    });
  });
}

export default renderDOM;
