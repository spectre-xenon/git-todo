import "./todo.css";
import { format, parseISO } from "date-fns";
import {
  deleteTodo,
  getCheckedTodosFraction,
  saveProjectArr,
} from "../Project";

const todoContainer = document.getElementById("todoContainer");
const progressSlider = document.getElementById("progressSlider");

function emptyTodoContainer() {
  todoContainer.textContent = "";
}

function updateProgress() {
  progressSlider.style.width = `${getCheckedTodosFraction() * 100}%`;
}

function renderTodo(todo) {
  // Creating elements
  const todoDiv = document.createElement("div");
  const mainTodoDiv = document.createElement("div");

  const expandDiv = document.createElement("div");
  const desc = document.createElement("p");
  const dateUtilsDiv = document.createElement("div");
  const date = document.createElement("p");
  const utilsDiv = document.createElement("div");
  const editButt = document.createElement("span");
  const deleteButt = document.createElement("span");

  const todoPartLeft = document.createElement("div");
  const input = document.createElement("input");
  const todoTitle = document.createElement("h4");

  const todoPartRight = document.createElement("div");
  const priority = document.createElement("div");
  const expandButt = document.createElement("span");

  // Adding classes
  todoDiv.classList.add("todo");
  mainTodoDiv.classList.add("mainTodo");

  todoPartLeft.classList.add("part");
  input.type = "checkbox";

  todoPartRight.classList.add("part");
  priority.classList.add("priority");
  expandButt.classList.add("material-symbols-rounded");

  expandDiv.classList.add("expand");
  dateUtilsDiv.classList.add("date-utils");
  utilsDiv.classList.add("utils");
  editButt.classList.add("material-symbols-rounded");
  deleteButt.classList.add("material-symbols-rounded");

  // Adding text
  input.checked = todo.checked;
  priority.style.backgroundColor = `var(--${todo.priority})`;
  expandButt.textContent = "expand_more";
  todoTitle.textContent = todo.title;
  desc.textContent = `Description: ${todo.desc}`;
  editButt.textContent = "edit";
  deleteButt.textContent = "delete";
  date.textContent = `Date: ${format(parseISO(todo.date), "P")}`;

  // Adding functionality
  if (input.checked) {
    todoTitle.style.color = "var(--more-text)";
    todoTitle.style.textDecoration = "line-through";
  }

  input.addEventListener("change", () => {
    if (input.checked) {
      todoTitle.style.color = "var(--more-text)";
      todoTitle.style.textDecoration = "line-through";
      todo.checked = true;
      saveProjectArr();
      updateProgress();
    } else {
      progressSlider.style.width = `${getCheckedTodosFraction() * 100}%`;
      todoTitle.style.color = "var(--text)";
      todoTitle.style.textDecoration = "none";
      todo.checked = false;
      saveProjectArr();
      updateProgress();
    }
  });

  let expanded = false;
  expandButt.addEventListener("click", () => {
    if (expanded) {
      expandButt.style.rotate = "0deg";
      todoDiv.style.height = "10%";
      expandDiv.style.flex = "0";
      desc.style.color = "var(--todo-expand-background)";
      expandDiv.style.backgroundColor = "var(--todo-expand-background)";

      expanded = false;
      return;
    }
    expandButt.style.rotate = "180deg";
    todoDiv.style.height = "35%";
    expandDiv.style.flex = "2";
    desc.style.color = "var(--sub-text)";
    expandDiv.style.backgroundColor = "var(--sub-text-background)";

    expanded = true;
  });

  deleteButt.addEventListener("click", () => {
    deleteTodo(todo.title);
    updateProgress();
  });

  // Appending elements
  todoDiv.appendChild(mainTodoDiv);
  todoDiv.appendChild(expandDiv);

  mainTodoDiv.appendChild(todoPartLeft);
  mainTodoDiv.appendChild(todoPartRight);

  todoPartLeft.appendChild(input);
  todoPartLeft.appendChild(todoTitle);

  todoPartRight.appendChild(priority);
  todoPartRight.appendChild(expandButt);

  expandDiv.appendChild(desc);
  expandDiv.appendChild(dateUtilsDiv);

  dateUtilsDiv.appendChild(date);
  dateUtilsDiv.appendChild(utilsDiv);

  utilsDiv.appendChild(editButt);
  utilsDiv.appendChild(deleteButt);

  todoContainer.appendChild(todoDiv);
}

export { renderTodo, emptyTodoContainer, updateProgress };
