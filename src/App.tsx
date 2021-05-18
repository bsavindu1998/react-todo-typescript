import { type } from "os";
import React from "react";
import { ToDoListItem } from "./TodoListItem";

const todos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "Write the app", complete: false },
];
function App() {
  return (
    <React.Fragment>
      <ToDoListItem todo={todos[0]} />
      <ToDoListItem todo={todos[1]} />
    </React.Fragment>
  );
}

export default App;
