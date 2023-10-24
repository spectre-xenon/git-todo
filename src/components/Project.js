import { isAfter, closestTo, isToday, parseISO, compareAsc } from "date-fns";
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

function Project(_projectTitle) {
  this.title = _projectTitle;
  this.todos = [];
  this.focused = false;

  this.createTodo = (_todoTitle, _desc, _date, _priority, _checked = false) => {
    let title = _todoTitle;
    let desc = _desc;
    let date = _date;
    let priority = _priority;
    let checked = _checked;

    this.todos.push({ title, desc, date, priority, checked });
  };
}

function saveProjectArr() {
  localStorage.setItem("storedArr", JSON.stringify(storedArr));
}

function sortAllProject() {
  const sortType = localStorage.getItem("sortType") || "priority";
  if (storedArr.length <= 0) return;

  storedArr.forEach((project) => {
    if (sortType === "priority") {
      project.todos.sort((todo1, todo2) => {
        const priorities = { high: 2, normal: 1, low: 0 };

        const a = priorities[todo1.priority];
        const b = priorities[todo2.priority];

        return b - a;
      });

      const groups = {};

      project.todos.forEach((todo) => {
        if (!groups[todo.priority]) {
          groups[todo.priority] = [];
        }
        groups[todo.priority].push(todo);
      });

      const sortedByDateGroups = Object.values(groups);
      sortedByDateGroups.forEach((group) => {
        group.sort((todo1, todo2) => {
          if (isAfter(parseISO(todo1.date), parseISO(todo2.date))) return -1;
          if (isAfter(parseISO(todo2.date), parseISO(todo1.date))) return 1;
          return 0;
        });
      });
      project.todos = sortedByDateGroups.flat();
    } else if (sortType === "dueDate") {
      project.todos.sort((todo1, todo2) => {
        if (isAfter(parseISO(todo1.date), parseISO(todo2.date))) return 1;
        if (isAfter(parseISO(todo2.date), parseISO(todo1.date))) return -1;
        return 0;
      });
    }
  });
}

function createProject(title) {
  storedArr.push(new Project(title));
  sortAllProject();
  renderDOM(storedArr);
  saveProjectArr();
}

function checkProjectExists(title) {
  if (storedArr.length <= 0) return;
  const project = storedArr.find((proj) => proj.title === title);

  if (project) {
    return true;
  }
  return false;
}

function deleteProject(projectTitle) {
  if (storedArr.length <= 0) return;
  storedArr.forEach((project, index) => {
    if (project.title === projectTitle) {
      storedArr.splice(index, 1);
    }
  });
  sortAllProject();
  saveProjectArr();
  renderDOM(storedArr);
}

function deleteTodo(todoTitle) {
  if (storedArr.length <= 0) return;
  const project = storedArr.find((proj) => proj.focused);
  project.todos.forEach((todo, index) => {
    if (todo.title === todoTitle) {
      project.todos.splice(index, 1);
    }
  });
  sortAllProject();
  saveProjectArr();
  renderDOM(storedArr);
}

function setFocusedProject(projectTitle) {
  if (storedArr.length <= 0) return;
  storedArr.forEach((project) => {
    project.focused = false;
    if (project.title === projectTitle) {
      project.focused = true;
    }
  });
  saveProjectArr();
  renderDOM(storedArr);
}

function checkTodoExists(title) {
  if (storedArr.length <= 0) return;
  let todoExist = false;
  const project = storedArr.find((proj) => proj.focused);
  project.todos.forEach((todo) => {
    if (todo.title === title) {
      todoExist = true;
    }
  });
  return todoExist;
}

function addTodo(title, desc, date, priority, checked = false) {
  if (storedArr.length <= 0) return;
  storedArr.forEach((project) => {
    if (project.focused) {
      project.createTodo(title, desc, date, priority, checked);
    }
  });
  // const project = projectArr.find((proj) => proj.focused);
  console.log(storedArr);
  sortAllProject();
  console.log(storedArr);
  saveProjectArr();
  console.log(storedArr);
  renderDOM(storedArr);
  console.log(storedArr);
}

function getCheckedTodosFraction() {
  if (storedArr.length <= 0) return 0;
  let todosCount = 0;
  let checkedTodos = 0;
  const project = storedArr.find((proj) => proj.focused);

  project.todos.forEach((todo) => {
    todosCount += 1;
    if (todo.checked) {
      checkedTodos += 1;
    }
  });

  return checkedTodos / todosCount;
}

function getProjectArr() {
  return storedArr;
}

export {
  sortAllProject,
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
