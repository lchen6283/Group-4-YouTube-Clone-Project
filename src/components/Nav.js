import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = (changeTheme) => {
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
      <button onClick={changeTheme}>toggle dark mode</button>
    </header>
  );
};

export default Nav;
