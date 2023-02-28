import React, { useState } from "react";




const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
const loginCall = async(event) => {
    event.preventDefault()
    console.log('username and password event', event.target[0].value, event.target[1].value);
   await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/users/login', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: event.target[0].value,
      password: event.target[1].value
    }
  })
  
}).then(response => response.json())
  .then(result => {
    console.log("tokinLogin",result);
  })
  .catch(console.error);
};
const createAccount = async (e) => {
    e.preventDefault()
     try {
       const response = await fetch(
         `https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/users/register`,
         {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             user: {
               username: username,
               password: password,
             },
           }),
         }
       );
       const result = await response.json();
       // You can log ▲▲▲ the result
       // here ▼▼▼ to view the json object before returning it
       console.log(result);
       return result;
     } catch (err) {
       console.error(err);
     }
   };
    return (
        <>
        <form
        id="Login"
        onSubmit={loginCall}

 


            >

            <label>
            Username:
            <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            </label>
            <label>
                Password:
                <input
                type="password"
                name="password"
                //autoComplete="none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            
            {/* <input type="password" name="confirmPassword" /> */}
            </label>
            <button id="Login-button" onClick={loginCall}>
                Login
            </button>
            <button id="Login-button" onClick={createAccount}>
                Register
            </button>
            </form>
            </>
    )
}

export default Login

            
        