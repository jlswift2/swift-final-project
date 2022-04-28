import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignupForm({ handleLogin }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        password_confirmation: "",
        email: "",
        first_name: "",
        last_name: ""
      });
    
    let navigate = useNavigate()

    function handleFormChange(e) {
        if (e.target.name === "profile_image") {
            setFormData({
                ...formData,
                [e.target.name]: e.target.files[0] 
            })
        } else { 
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    }

    function handleSubmit (e) {
        e.preventDefault();
        let fd = new FormData()
        fd.append('username', formData.username)
        fd.append('password', formData.password)
        fd.append('password_confirmation', formData.password_confirmation)
        fd.append('email', formData.email)
        fd.append('first_name', formData.first_name)
        fd.append('last_name', formData.last_name)
        fd.append('profile_image', formData.profile_image)
        fetch("/signup", {
            method: "POST",
            body: (fd),
          })
            .then((r) => r.json())
            .then((user) => {
                handleLogin(user)
                navigate('/')
            });
        }
        
  
    return (
        <div>
            <h1>Signup Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first_name">First Name:</label>
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleFormChange}
                />
                <label htmlFor="last_name">Last Name:</label>
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleFormChange}
                />
                <label htmlFor="email">Email Address:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                />
                <label htmlFor="username">Desired Username:</label>
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
                <label htmlFor="password_confirmation">Confirm Password:</label>
                <input
                    type="password"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleFormChange}
                />
                <input 
                    type="file" 
                    name="profile_image"
                    accept="image/png, image/jpeg" 
                    onChange={handleFormChange} 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignupForm