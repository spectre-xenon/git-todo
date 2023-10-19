import renderDOM from "./domHandler";

const storedArr = JSON.parse(localStorage.getItem("sortedArr")) || [];
if (storedArr.length > 0) {
  storedArr.forEach((proj) => {
    proj.createTodo = (
      _todoTitle,
      _desc,
      _date,
      _priority,
      _checked = false
    ) => {
      let title = _todoTitle;
      let desc = _desc;
      let date = _date;
      let priority = _priority;
      let checked = _checked;
      const setChecked = (state) => {
        checked = state;
      };
      const isChecked = () => checked;
      proj.todos.push({ title, desc, date, priority, setChecked, isChecked });
    };

    proj.todos.forEach((todo) => {
      todo.setChecked = (state) => {
        todo.checked = state;
      };
      todo.isChecked = (state) => todo.checked;
    });
  });
}
const projectArr = storedArr;

function Project(_projectTitle) {
  const title = _projectTitle;
  const todos = [];
  let focused = false;

  const createTodo = (
    _todoTitle,
    _desc,
    _date,
    _priority,
    _checked = false
  ) => {
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

  return { title, focused, todos, createTodo };
}

function saveProjectArr() {
  localStorage.setItem("sortedArr", JSON.stringify(projectArr));
}

function createProject(title) {
  projectArr.push(Project(title));
  renderDOM(projectArr);
  saveProjectArr();
}

function deleteProject(projectTitle) {
  projectArr.forEach((project, index) => {
    if (project.title === projectTitle) {
      projectArr.splice(index, 1);
    }
  });
  saveProjectArr();
  renderDOM(projectArr);
}

function deleteTodo(todoTitle) {
  projectArr.forEach((project) => {
    if (project.focused) {
      project.todos.forEach((todo, index) => {
        if (todo.title === todoTitle) {
          project.todos.splice(index, 1);
        }
      });
    }
  });
  saveProjectArr();
  renderDOM(projectArr);
}

function setFocusedProject(projectTitle) {
  projectArr.forEach((project) => {
    if (project.title === projectTitle) {
      project.focused = true;
    }
    project.focused = false;
  });
  saveProjectArr();
  renderDOM(projectArr);
}

function addTodo(title, desc, date, priority, checked = false) {
  projectArr.forEach((project) => {
    if (project.focused) {
      project.createTodo(title, desc, date, priority, checked);
    }
  });
  saveProjectArr();
  renderDOM(projectArr);
}

function getProjectArr() {
  return projectArr;
}

export {
  createProject,
  getProjectArr,
  deleteProject,
  deleteTodo,
  setFocusedProject,
  addTodo,
};
