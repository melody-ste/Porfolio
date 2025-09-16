import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeContext from "./contexts/ThemeContext";
import LanguageContext from "./contexts/LanguageContext";
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import LegalNotice from './pages/LegalNotice';
import ProjectDetail from './pages/ProjectDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "fr";
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === "fr" ? "en" : "fr";
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <div className={`app ${theme}`}>
          <BrowserRouter>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} /> 
                <Route path="/legal-notice" element={<LegalNotice />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App
