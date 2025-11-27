import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() { return <h2>Home Page</h2>; }
function About() { return <h2>About Page</h2>; }
function Blog() { return <h2>Blog Page</h2>; }

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/blog">Blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
