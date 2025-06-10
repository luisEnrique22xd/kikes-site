import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './views/About';
import Contact from './views/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        Kike`s site` 🚀
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App

