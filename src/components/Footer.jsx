import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">legal notices</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;