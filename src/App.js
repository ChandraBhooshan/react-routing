// import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar.js"
// import DummyHome from "./DummyHome.js"
import About from "./About.js"
import Contact from "./Contact.js"
import Blog from "./Blog.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/home" element={<Navbar />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
