import React from "react";

const TodoItem = ({ todo , onEditTodo}) => {
  return (
    <li>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
        <button onClick={() => onEditTodo(todo)}>Edit</button>
    </li>
  );
};

export default TodoItem;