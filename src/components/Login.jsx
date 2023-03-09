import React from 'react';
import { useState } from 'react';
import { BASE_URL } from '../api';


export default function Login({ setToken }) {
  const [userName, setUserName] = useState('');
  const [passWord, setPassword] = useState('');
  //const [token, useToken] = useState('');
  

  async function loginUser(event) {
    event.preventDefault();
    console.log('username and password event', event.target[0].value, event.target[1].value);
    
      await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: event.target[0].value,
          password: event.target[1].value
        }
      })
    }).then(response => response.json())
      .then(result => {
        console.log(result);
        localStorage.setItem('token', result.data.token)
      })
      .catch(console.error);
      }
      return (
        <form onSubmit={(event) => loginUser(event)}>
          <label>Username:</label>
            <input
              placeholder='Username'
              type="text"
              value={userName}
              onChange={(event) => setUserName(event.target[0])}
            ></input>
          <label>Password:</label>
            <input
              placeholder='Password'
              type="password"
              value={passWord}
              onChange={(event) => setPassword(event.target[1])}
            ></input>
          <button type="submit">Login</button>
        </form>
      );
    }













            
        