import React from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const ToDoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : "none"}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};
