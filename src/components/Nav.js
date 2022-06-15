import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <header>
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
