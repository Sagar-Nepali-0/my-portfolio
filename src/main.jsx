import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Projects from '../src/pages/Projects'
import Contact from '../src/pages/Contact'

createRoot(document.getElementById('root')).render(


  <StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
</StrictMode>
)
