import React, { useState, useEffect } from "react";
import axios from "axios";
import {BaseUrl2} from "../constants";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const token = localStorage.getItem("Token");
        const response = await axios.get(`${BaseUrl2}/api/todos/`, {
          headers: {
            Authorization: `Token ${token}`
          }
        });
        setTodos(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title} - {todo.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;