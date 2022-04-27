import React, { useState } from 'react'

function LoginForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });

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
            body: JSON.stringify(formData ),
          })
            .then((r) => r.json())
            .then((user) => console.log(user));
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