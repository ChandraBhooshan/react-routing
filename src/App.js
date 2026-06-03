// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Navbar.js";
import DummyHome from "./DummyHome.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Blog from "./Blog.js";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  // const Navigate = useNavigate(); // Initialize hook here
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navigating elements placed here stay visible on every single page */}
        <Navbar />

        <Routes>
          {/* If you have a Home component, use it here. Otherwise, leave it empty or map to a lander */}
          <Route path="/" element={<DummyHome />}></Route>
          {/* <Route path="/home" element={<Navigate to="/" replace />} /> */}
          <Route path="/home" element={<DummyHome />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
