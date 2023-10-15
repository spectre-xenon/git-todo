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
const projectArr = [];

(function main() {
  const project1 = createProject("p1");

  for (let index = 0; index < 10; index++) {
    project1.createTodo(
      "t1",
      "jdwjd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjd oiawjd oiwajd oiawjd oiawdj oiawj oiaj wiojad oiwjd oiawjdoi awj oidawj oij diojd oiawdj awiojdjioawdd joiawd joiawdjio jawoid jioawd joiawdjoiwdajoiwdajoidaw joio jawdo",
      new Date(),
      ["high", "normal", "low"][Math.floor(Math.random() * 3)],
      false
    );
  }

  projectArr.push(project1);

  renderDOM(projectArr);
})();
