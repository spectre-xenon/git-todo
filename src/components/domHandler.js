import {
  renderProject,
  emptyProjectContainer,
} from "./components/renderProject";
import initForm from "./components/renderForm";

initForm();

function renderDOM(projectArr) {
  emptyProjectContainer();
  projectArr.forEach((project) => {
    renderProject(project);
  });
}

export default renderDOM;
