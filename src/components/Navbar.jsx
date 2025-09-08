import { Link } from "react-router-dom";
import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Navbar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <nav className={`navbar ${theme}`}>
      <ul>
        <li>
          <Link to="/resume">CV</Link>
        </li>
        <li>
          <Link to="/projects">Projets</Link>
        </li>
      </ul>

      <button onClick={toggleTheme} className="theme-toggle-btn">
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
    
  );
};

export default Navbar;