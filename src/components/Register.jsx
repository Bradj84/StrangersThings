import React, {useEffect, useState} from "react";

import { registerUser } from "../api";





export const Register = ( ) => {
    const [name, setName] =useState([]);
    //const [email, setEmail] =useState([]);
    const [password, setPassword] =useState([]);
    const [passConf, setPassConf] =useState([]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await registerUser(name, email, password)




        console.log(name, email, password, passConf)
    }



    return (
        <form onSubmit={handleSubmit} className="registration-container"
        >
            <div>
                <h2>Register</h2>
                <input
                type="text"
                placeholder="Full Name"
                className="register-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <br></br>
                <input
                type="email"
                placeholder="Email"
                className="register-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>
                <input
                type="password"
                placeholder="Confirm Password"
                className="register-input"
                //minLength={e} required
                //autoComplete="none"
                value={passConf}
                onChange={(e) => setPassConf(e.target.value)}
                />
                <br>
                </br>
                <button type="submit">Register</button>
            </div>
        </form>
    )
}