import { useState } from 'react';
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

  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("fr");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

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
