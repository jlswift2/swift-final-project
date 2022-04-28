import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

        </Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
