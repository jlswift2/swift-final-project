import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'
import { useState, useEffect } from "react";                                                           

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin (user) {
    setUser(user);
  }

  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login handleLogin={handleLogin} />} />
          <Route path="signup" element={<Signup handleLogin={handleLogin}/>} />

        </Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
