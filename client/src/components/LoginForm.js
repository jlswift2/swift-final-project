import React, { useState } from 'react'

function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
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
        console.log(formData)
    }
  
  
    return (
    <div>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
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