import { type } from "os";
import React, { useState } from "react";
import { ToDoList } from "./TodoList";


const initialtodo: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "Write the app", complete: false },
];
function App() {
  const [todos,setTodos] = useState(initialtodo);

  const toggleToDo:ToggleTodo = (selectedTodo)=>{
    const newTodos = todos.map(todo=>{
      if (todo===selectedTodo){
        return{
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
     <ToDoList todos={todos} toggleTodo = {toggleToDo}/>
    </React.Fragment>
  );
}

export default App;
