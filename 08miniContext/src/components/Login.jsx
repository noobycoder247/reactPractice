import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext';


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext); // Getting this setUser from UserContext

    const handleSubmit = (e) => {
        e.preventDefault;
        setUser({username, password});
    }
  return (
    <div>
        <input type="text"
        value={username}
        onChange={(e)=>{
            setUsername(e.target.value)
        }}
        placeholder='username'
        />
        <br />
        <input type="password"
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
        placeholder='password'
        />
        <br />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login