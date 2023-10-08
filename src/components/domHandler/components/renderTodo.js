import "./todo.css";

function renderTodo(container, todo) {
  const todoDiv = document.createElement("div");

  const todoPartLeft = document.createElement("div");
  const input = document.createElement("input");
  const todoTitle = document.createElement("h4");

  const todoPartRight = document.createElement("div");
  const priority = document.createElement("div");
  const expandButt = document.createElement("span");

  todoDiv.classList.add("todo");

  todoPartLeft.classList.add("part");
  input.type = "checkbox";

  todoPartRight.classList.add("part");
  priority.classList.add("priority");
  expandButt.classList.add("material-symbols-rounded");

  input.checked = todo.checked;
  todoTitle.textContent = todo.title;
  expandButt.textContent = "expand_more";

  todoDiv.appendChild(todoPartLeft);
  todoDiv.appendChild(todoPartRight);

  todoPartLeft.appendChild(input);
  todoPartLeft.appendChild(todoTitle);

  todoPartRight.appendChild(priority);
  todoPartRight.appendChild(expandButt);

  container.appendChild(todoDiv);
}

export default renderTodo;
