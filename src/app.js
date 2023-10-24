import "./index.css";
import { formatISO } from "date-fns";
import renderDOM from "./components/domHandler";
import {
  getProjectArr,
  createProject,
  addTodo,
  sortAllProject,
  saveProjectArr,
} from "./components/Project";

(function main() {
  const FirstSiteVisist = localStorage.getItem("FSV") || "1";

  if (FirstSiteVisist === "1") {
    localStorage.setItem("FSV", 0);
    createProject("Home");
    addTodo(
      "Welcome",
      "Hope u have a nice stay",
      formatISO(new Date()),
      "high"
    );
    addTodo(
      "Nice todo",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam vero voluptatem commodi ipsam, in eaque debitis ratione quisquam minima laboriosam! ",
      formatISO(new Date()),
      "normal",
      true
    );
    addTodo(
      "Wow AmAzInG!!",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      formatISO(new Date()),
      "low"
    );
  } else {
    renderDOM(getProjectArr());
  }

  const sortBySelect = document.getElementById("sortBy");
  if (localStorage.getItem("sortType") === "priority") {
    sortBySelect.value = "priority";
  } else if (localStorage.getItem("sortType") === "dueDate") {
    sortBySelect.value = "dueDate";
  }

  sortBySelect.addEventListener("input", (e) => {
    console.log(e.target.value);
    localStorage.setItem("sortType", e.target.value);
    sortAllProject();
    saveProjectArr();
    renderDOM(getProjectArr());
  });
})();
