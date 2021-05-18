import React from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
}

export const ToDoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : "none"}>
        <input type="checkbox" checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  );
};
