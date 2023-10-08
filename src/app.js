import renderDOM from "./components/domHandler/domHandler";

renderDOM([
  {
    title: "p1",
    todos: [
      { title: "t1", checked: true },
      { title: "t2", checked: false },
      { title: 't3', checked: false },
      { title: "t4", checked: true },
    ],
  },

  {
    title: "p2",
    todos: [
      { title: "t5", checked: true },
      { title: 't6', checked: false },
      { title: "t7", checked: false },
      { title: "t8", checked: true },
    ],
  },
]);
