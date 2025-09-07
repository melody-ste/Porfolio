import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/resume">CV</Link>
        </li>
        <li>
          <Link to="/projects">Projets</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;