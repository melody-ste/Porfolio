import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeContext from "./contexts/ThemeContext";
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import LegalNotice from './pages/LegalNotice';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/legal-notice" element={<LegalNotice />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};

export default App
