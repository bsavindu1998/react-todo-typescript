import { type } from "os";
import React, { useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { ToDoList } from "./TodoList";

const initialtodo: Array<Todo> = [
  { text: "Sample data", complete: true },
  { text: "Sample list item", complete: false },
];
function App() {
  const [todos, setTodos] = useState(initialtodo);
  const toggleToDo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  return (
    <React.Fragment>
      <ToDoList todos={todos} toggleTodo={toggleToDo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
}

export default App;
