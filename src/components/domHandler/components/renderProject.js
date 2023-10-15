import "./project.css";

function renderProject(container, project) {
  const projectDiv = document.createElement("div");
  const projectDivTitle = document.createElement("p");
  const projectDivDelete = document.createElement("span");

  projectDiv.classList.add("project");
  projectDivDelete.classList.add("material-symbols-rounded");

  projectDivTitle.textContent = project.title;
  projectDivDelete.textContent = "delete";

  
  projectDiv.appendChild(projectDivTitle);
  projectDiv.appendChild(projectDivDelete);

  container.appendChild(projectDiv);
}

export default renderProject;
