import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import { useState, useEffect } from "react";                                                           

function App() {
  const [user, setUser] = useState(null);
  // user={user} setUser={setUser}

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
        <Route path="/" element={<Layout user={user} setUser={setUser} />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login handleLogin={handleLogin} />} />
          <Route path="signup" element={<Signup handleLogin={handleLogin}/>} />
          <Route path="land" element={<LandingPage />}>  
          </Route> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
