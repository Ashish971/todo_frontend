import React, { useState } from "react";

const TodoForm = ({ onTodoAdded, todo, onTodoUpdated }) => {
  const [title, setTitle] = useState(todo ? todo.title : "");
  const [description, setDescription] = useState(todo ? todo.description : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      const updatedTodo = { id: todo.id, title, description };
      onTodoUpdated(updatedTodo);
    } else {
      const newTodo = { title, description };
      onTodoAdded(newTodo);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {todo ? (
        <button type="submit">Save Edit</button>
      ) : (
        <button type="submit">Add Todo</button>
      )}
    </form>
  );
};

export default TodoForm;