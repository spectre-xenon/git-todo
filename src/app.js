import "./index.css";
import renderDOM from "./components/domHandler/domHandler";

function Project(_projectTitle) {
  const title = _projectTitle;
  const todos = [];
  let focused = false;

  const setFocused = (state) => {
    focused = state;
  };

  const isFocused = () => focused;

  const createTodo = (_todoTitle, _desc, _date, _priority, _checked) => {
    let title = _todoTitle;
    let desc = _desc;
    let date = _date;
    let priority = _priority;
    let checked = _checked;

    const setChecked = (state) => {
      checked = state;
    };

    const isChecked = () => checked;

    todos.push({ title, desc, date, priority, setChecked, isChecked });
  };

  return { title, setFocused, isFocused, todos, createTodo };
}
const projectArr = [];

(function main() {
  const project1 = Project("p1");
  const project2 = Project("p2");
  for (let index = 0; index < 10; index++) {
    project1.createTodo(
      "t1",
      "jdwjd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjd oiawjd oiwajd oiawjd oiawdj oiawj oiaj wiojad oiwjd oiawjdoi awj oidawj oij diojd oiawdj awiojdjioawdd joiawd joiawdjio jawoid jioawd joiawdjoiwdajoiwdajoidaw joio jawdo",
      new Date(),
      ["high", "normal", "low"][Math.floor(Math.random() * 3)],
      false
    );

    project2.createTodo(
      "t2",
      "jdwjd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjdd wjd oiawjd oiawjd oiwajd oiawjd oiawdj oiawj oiaj wiojad oiwjd oiawjdoi awj oidawj oij diojd oiawdj awiojdjioawdd joiawd joiawdjio jawoid jioawd joiawdjoiwdajoiwdajoidaw joio jawdo",
      new Date(),
      ["high", "normal", "low"][Math.floor(Math.random() * 3)],
      false
    );
  }

  projectArr.push(project1);
  projectArr.push(project2);

  renderDOM(projectArr);
})();
