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
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    console.log(errors)
    
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
          .then((r) => {
            setIsLoading(false);
            if (r.ok) {
              r.json().then((user) => {
                  handleLogin(user)
                  navigate('/land')
              });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
        } 
  
    return (
        <div>
            <h1 className='font-serif text-4xl font-bold text-primary mt-4 mb-12 text-center'>Signup Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first_name">First Name:</label>
                <input
                    className="font-serif w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                    required
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleFormChange}
                />
                <label htmlFor="last_name">Last Name:</label>
                <input
                    className="font-serif w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                    required
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleFormChange}
                />
                <label htmlFor="email">Email Address:</label>
                <input
                    className="font-serif w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                />
                <label htmlFor="username">Desired Username:</label>
                <input
                    className="font-serif w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                    required
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleFormChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    className="font-serif w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                    required
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                />
                <label htmlFor="password_confirmation">Confirm Password:</label>
                <input
                    className="font-serif w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                    required
                    type="password"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleFormChange}
                />
                <label htmlFor="profile_image">Upload a Profile Image:</label>
                <input
                    className="font-serif w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" 
                    required
                    type="file" 
                    name="profile_image"
                    accept="image/png, image/jpeg" 
                    onChange={handleFormChange} 
                />
                <button type="submit" className="m-auto font-serif w-full text-center py-1 px-2 mt-6 bg-green-200 rounded-full text-base hover:bg-green-400 transition duration-300 ease-in-out">{isLoading ? "Loading..." : "Sign Up"}</button>
                <div className="text-red-500 text-center mt-2">
                    {errors.map((err) => (
                        <p key={err}>{err}</p>
                    ))}
                </div>
            </form>
        </div>
    )
}

export default SignupForm