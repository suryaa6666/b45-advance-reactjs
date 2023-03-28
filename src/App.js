import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import DetailUser from "./pages/DetailUser";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from "react";
// import component here

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/signin"
          element={<SignIn setIsLogin={setIsLogin} />}
        />
        <Route element={<PrivateRoute isLogin={isLogin} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/transaction" element={<Profile />} />
          <Route path="/create-product" element={<Profile />} />
        </Route>
        {/* change route for page about, profile, and user:id to private route */}
      </Routes>
    </Router>
  );
}

export default App;
