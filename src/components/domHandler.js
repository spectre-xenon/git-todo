import {
  renderProject,
  emptyProjectContainer,
} from "./components/renderProject";
import {
  renderTodo,
  emptyTodoContainer,
  updateProgress,
} from "./components/renderTodo";
import initForm from "./components/renderForm";

initForm();

function renderDOM(projectArr) {
  emptyProjectContainer();

  if (projectArr.length > 0) {
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
  } else {
    emptyTodoContainer();
  }
  updateProgress();
}

export default renderDOM;
