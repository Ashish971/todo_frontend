import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [token, setToken] = useState(localStorage.getItem('Token'));
  const [todos, setTodos] = useState([]);
  const [showTodos, setShowTodos] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/todos/', {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      setTodos(response.data);
      setShowTodos(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = JSON.stringify({
      title: title,
      description: description
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/api/todos/', // replace with your backend URL
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setTitle('');
        setDescription('');
        fetchTodos(); // fetch updated todo list
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        <br />
        <label>Description:</label>
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        <br />
        <button type="submit">Create Todo</button>
      </form>
      {showTodos && (
        <div>
          <h2>Todo List:</h2>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title} - {todo.description}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CreateTodo;