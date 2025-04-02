import React, { useState } from 'react';
import axios from 'axios';
import CreateTodo from './CreateTodo';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Err, setErr] = useState("")
  const [showCreateTodo, setShowCreateTodo] = useState(false);

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  }

  const login = () => {
    let data = JSON.stringify({
      "username": username,
      "password": password
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/api/login/', // replace with your backend URL
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("Token", response.data.token);
        setErr("Login Successful!");
        setShowCreateTodo(true);
      })
      .catch((error) => {
        console.log(error);
        setErr("No such User");
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Username" onChange={usernameChangeHandler}/>
      <input type="password" placeholder="Password" onChange={passwordChangeHandler}/>
      <button onClick={login}>Login</button>
      {Err === "Login Successful!" ? (
        <div>
          <p style={{ color: "green" }}>{Err}</p>
          {showCreateTodo && <CreateTodo />}
        </div>
      ) : (
        <p style={{ color: "red" }}>{Err}</p>
      )}
    </div>
  );
}

export default Login;