import {
  renderProject,
  emptyProjectContainer,
} from "./components/renderProject";
import {
  renderTodo,
  emptyTodoContainer,
  resetProgress,
} from "./components/renderTodo";
import initForm from "./components/renderForm";

initForm();

function renderDOM(projectArr) {
  emptyProjectContainer();

  projectArr.forEach((project) => {
    if (projectArr.length === 1) project.focused = true;
    renderProject(project);

    if (project.focused) {
      emptyTodoContainer();
      project.todos.forEach((todo) => {
        renderTodo(todo);
      });
    }
  });

  resetProgress();
}

export default renderDOM;
