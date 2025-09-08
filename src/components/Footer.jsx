import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/m%C3%A9lody-stephan-b4a485172/"><Icon icon="icomoon-free:linkedin" width="25" /></a>
        </li>
        <li>
          <a href="https://github.com/melody-ste"><Icon icon="akar-icons:github-fill" width="25" /></a>
        </li>
        <li>
          
          <a href="https://github.com/melody-ste"><Icon icon="simple-icons:artstation" width="25" /></a>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/">Mentions légales</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;