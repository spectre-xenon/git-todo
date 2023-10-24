import renderDOM from "./domHandler";

const storedArr = JSON.parse(localStorage.getItem("storedArr")) || [];

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

      proj.todos.push({ title, desc, date, priority, checked });
    };

    proj.todos.forEach((todo) => {
      todo.setChecked = (state) => {
        todo.checked = state;
      };
      todo.isChecked = () => todo.checked;
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

    todos.push({ title, desc, date, priority, checked });
  };

  return { title, focused, todos, createTodo };
}

function saveProjectArr() {
  localStorage.setItem("storedArr", JSON.stringify(projectArr));
}

function sortAllProject() {
  // TODO
  projectArr.forEach((project) => {
    project.todos.sort((todo1, todo2) => {
      const priorities = { high: 2, normal: 1, low: 0 };

      const a = priorities[todo1.priority];
      const b = priorities[todo2.priority];

      return b - a;
    });
  });
}

function createProject(title) {
  // Todo: move this function to (create,remove,edit todo functions)
  projectArr.push(Project(title));
  sortAllProject();
  renderDOM(projectArr);
  saveProjectArr();
}

function checkProjectExists(title) {
  const project = projectArr.find((proj) => proj.title === title);

  if (project) {
    return true;
  }
  return false;
}

function deleteProject(projectTitle) {
  projectArr.forEach((project, index) => {
    if (project.title === projectTitle) {
      projectArr.splice(index, 1);
    }
  });
  sortAllProject();
  saveProjectArr();
  renderDOM(projectArr);
}

function deleteTodo(todoTitle) {
  const project = projectArr.find((proj) => proj.focused);
  project.todos.forEach((todo, index) => {
    if (todo.title === todoTitle) {
      project.todos.splice(index, 1);
    }
  });
  sortAllProject();
  saveProjectArr();
  renderDOM(projectArr);
}

function setFocusedProject(projectTitle) {
  projectArr.forEach((project) => {
    project.focused = false;
    if (project.title === projectTitle) {
      project.focused = true;
    }
  });
  saveProjectArr();
  renderDOM(projectArr);
}

function checkTodoExists(title) {
  let todoExist = false;
  const project = projectArr.find((proj) => proj.focused);
  project.todos.forEach((todo) => {
    if (todo.title === title) {
      todoExist = true;
    }
  });
  return todoExist;
}

function addTodo(title, desc, date, priority, checked = false) {
  const project = projectArr.find((proj) => proj.focused);
  project.createTodo(title, desc, date, priority, checked);
  sortAllProject();
  saveProjectArr();
  renderDOM(projectArr);
}

function getCheckedTodosFraction() {
  let todosCount = 0;
  let checkedTodos = 0;
  const project = projectArr.find((proj) => proj.focused);

  project.todos.forEach((todo) => {
    todosCount += 1;
    if (todo.checked) {
      checkedTodos += 1;
    }
  });

  return checkedTodos / todosCount;
}

function getProjectArr() {
  return projectArr;
}

export {
  saveProjectArr,
  createProject,
  checkProjectExists,
  getProjectArr,
  deleteProject,
  deleteTodo,
  setFocusedProject,
  addTodo,
  checkTodoExists,
  getCheckedTodosFraction,
};
