import About from "./About";
import Contact from "./Contact"
import Home from "./Home"
import Card from "./Card";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav style={{ padding: 10, background: "#eee" }}>
        <Link to="/" style={{ margin: 10 }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: 10 }}>
          About
        </Link>
        <Link to="/contact" style={{ margin: 10 }}>
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
