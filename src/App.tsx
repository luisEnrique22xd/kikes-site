import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/header";
import About from "./view/About";
import Contact from "./view/Contact";
import Home from "./view/Home";

export default function App() {
  return (
      <Router>
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  )
}

