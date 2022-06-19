import { Link } from "react-router-dom";
import "./Nav.css";

/**
 * Nav bar
 * @returns <header> with links to home and about pages
 */
const Nav = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1>YouTube</h1>
      </Link>

      <Link to="/">
        <h1>Home</h1>
      </Link>

      <Link to="/about">
        <h1>About</h1>
      </Link>
    </header>
  );
};

export default Nav;
