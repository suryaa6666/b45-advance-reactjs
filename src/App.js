import "bootstrap/dist/css/bootstrap.min.css";

// import necessary object from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "pages" component here
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";

function App() {
  const route = window.location.pathname;

  function getParaText() {
    switch (route) {
      case "/":
        return "Jeri";
      case "/about":
        return "Budi";
      default:
        return "nothing";
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home getParaText={getParaText()} />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
