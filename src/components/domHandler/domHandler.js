import renderProject from "./components/renderProject";

function renderDOM(projectArr) {
  projectArr.forEach((project) => {
    renderProject(project);
  });
}

export default renderDOM;
