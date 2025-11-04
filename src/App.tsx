
import './App.css'
import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Contact from './pages/Contact';
import About from './pages/About';

function App() {

  return (
        <Router>
          <Navbar />
            <Routes>
              <Route path="/" element = {<Home />} />
              <Route path="about" element = {<About />} />
              <Route path="/contact" element = {<Contact />} />
            </Routes>
        </Router>

  );
  }

export default App
