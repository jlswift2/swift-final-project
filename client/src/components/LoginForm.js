import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginForm({ handleLogin }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
          .then((r) => {
            setIsLoading(false);
            if (r.ok) {
              r.json().then((user) => {
                handleLogin(user);
              console.log("logged in");
              navigate('/land')
            })
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
        }
  
  
    return (
    <div>
        <h1 className='font-serif text-4xl font-bold text-primary mt-4 mb-12 text-center'>Login Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                className="font-serif w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleFormChange}
            />
            <label htmlFor="password">Password:</label>
            <input
                className="font-serif w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}
            />
            <button className="m-auto font-serif w-full text-center py-1 px-2 mt-6 bg-green-200 rounded-full text-base hover:bg-green-400 transition duration-300 ease-in-out" type="submit">
                {isLoading ? "Loading..." : "Login"}
            </button>
            <div className="text-red-500 text-center">
                {errors.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </div>
        </form>
    </div>
    )
}

export default LoginForm