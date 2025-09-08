import { Link } from "react-router-dom";
import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LanguageContext from "../contexts/LanguageContext";
import translations from "../contexts/translations";

const Navbar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <nav className={`navbar ${theme}`}>
      <ul>
        <li>
          <Link to="/resume">{translations.navbar.resume[language]}</Link>
        </li>
        <li>
          <Link to="/projects">{translations.navbar.projects[language]}</Link>
        </li>
      </ul>

      <div>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <button onClick={toggleLanguage} className="language-toggle-btn">
          {language === "fr" ? "EN" : "FR"}
        </button>
      </div>
    </nav>
    
  );
};

export default Navbar;