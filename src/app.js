import "./index.css";
import { formatISO } from "date-fns";
import renderDOM from "./components/domHandler";
import { getProjectArr, createProject, addTodo } from "./components/Project";

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
})();
