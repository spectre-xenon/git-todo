import renderDOM from "./components/domHandler/domHandler";

function createProject(title) {
  const todos = [];

  const createTodo = (title, desc, date, priority, checked) => {
    todos.push({
      title,
      desc,
      date,
      priority,
      checked,
    });
  };

  return { title, todos, createTodo };
}

(function main() {
  const projectArr = [];

  const project1 = createProject("p1");

  project1.createTodo("t1", "fancy123123", new Date(), "high", true);

  projectArr.push(project1);
  localStorage.setItem("projectArr", JSON.stringify(projectArr));

  renderDOM(JSON.parse(localStorage.getItem("projectArr")));
})();
