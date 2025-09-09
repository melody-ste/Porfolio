import { Link } from "react-router-dom";
import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LanguageContext from "../contexts/LanguageContext";
import translations from "../contexts/translations";
import { Icon } from "@iconify/react";

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

      <ul>
        <li>
          <button onClick={toggleLanguage} className="language-toggle-btn">
            {language === "fr" ? "EN" : "FR"}
          </button>
        </li>

        <li>
          <label className="switch">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            <Icon icon="gg:sun" className="switch-icon sun" />
            <Icon icon="material-symbols:dark-mode-outline" className="switch-icon moon" />
          </label>
        </li>

      </ul>
    </nav>
    
  );
};

export default Navbar;