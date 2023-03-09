import React from "react";
import { useState } from "react";
import { BASE_URL } from "../api";



export default function CreateAccount({token}) {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
  
    async function createNewAccount(event){
      event.preventDefault();
      fetch(`${BASE_URL}/users/register`, {
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
      console.log('This is token from Register', result.data.token)
      localStorage.setItem('token', result.data.token)
    })
    .catch(console.error);
    }
      return (
          <form onSubmit={(event) => createNewAccount(event)}>
              <label>Register Username:</label>
                <input 
                  placeholder="New Username"
                  type="text" 
                  value={newUsername}
                  onChange={(event) => setNewUsername(event.target[0])}
                ></input>
              <label>Register Password:</label>
                <input 
                  placeholder="New Password"
                  type="password" 
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target[1])}
                ></input>
              <button type="submit">Create Account</button>
          </form>
          );
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  