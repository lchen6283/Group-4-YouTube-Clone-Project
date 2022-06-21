import { Link } from "react-router-dom";
import "./Nav.css";

/**
 * Nav bar
 * @returns Header with links to home and about pages
 */
const Nav = () => {
  return (
    <header className="header">
      <Link to="/youtube">
        <img
          className="logo"
          src="https://c.tenor.com/6TwUFuzcjOQAAAAd/youtube.gif"
          alt="yt-logo"
        />
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
