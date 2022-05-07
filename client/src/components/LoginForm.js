import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginForm({ handleLogin }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });

    let navigate = useNavigate()

    function handleFormChange(e) {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    }

    function handleSubmit (e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((r) => r.json())
            .then((user) => {
                handleLogin(user)
                navigate('/land')
            });
        }
  
  
    return (
    <div>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleFormChange}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}
            />
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}

export default LoginForm