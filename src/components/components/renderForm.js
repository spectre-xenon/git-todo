import "./form.css";
import { formatISO } from "date-fns";
import { createProject, addTodo } from "../Project";

function newTodoButtClick(dialog) {
  const title = document.getElementById("todoTitle");
  const desc = document.getElementById("desc");
  const priotity = document.getElementById("priotity");
  const date = document.getElementById("date");

  document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    if (title.value === "") return alert("Please enter a todo name!");

    addTodo(
      title.value,
      desc.value || "no Desc",
      date.value ? formatISO(new Date(date.value)) : formatISO(new Date()),
      priotity.selectedIndex || "normal"
    );
    dialog.style.display = "none";
    title.value = "";
    desc.value = "";
    priotity.selectedIndex = "";
  });
}

function initForm() {
  const dialog = document.getElementById("addFormBackdrop");
  const button = document.getElementById("addButt");

  button.addEventListener("click", () => {
    dialog.style.display = "flex";
  });

  const form = document.querySelector("form");
  const newTodoButt = document.getElementById("newTodo");
  const newProjectButt = document.getElementById("newProject");
  const newTodoTemp =
    "<input type='text' class='title' id='todoTitle' placeholder='Title*' required /> <textarea id='desc' cols='30' rows='10' placeholder='Description' id='desc' ></textarea> <select id='priotity' > <option value='' disabled selected hidden>Priority</option> <option value='low'>Low</option> <option value='normal'>Normal</option> <option value='high'>High</option> </select> <input type='date' id='date' /> <button type='submit'>Create</button>";
  const newProjectTemp =
    "<input type='text' id='projectTitle' class='title' placeholder='Title*' required /> <button type='submit'>Create</button>";

  form.innerHTML = newTodoTemp;
  newTodoButtClick(dialog);

  newTodoButt.addEventListener("click", () => {
    newProjectButt.style.background = "#313244";
    newTodoButt.style.background = "#45475a";
    form.innerHTML = newTodoTemp;

    newTodoButtClick(dialog);
  });

  newProjectButt.addEventListener("click", () => {
    newTodoButt.style.background = "#313244";
    newProjectButt.style.background = "#45475a";
    form.innerHTML = newProjectTemp;

    const title = document.getElementById("projectTitle");

    document.querySelector("button").addEventListener("click", (e) => {
      e.preventDefault();
      if (title.value === "") return alert("Please enter a project name!");
      createProject(title.value);
      dialog.style.display = "none";
      title.value = "";
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dialog.style.display = "none";
    }
  });
}

export default initForm;