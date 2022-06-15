import { Link } from "react-router-dom";
import { ReactDOM } from "react";
import AboutMeSection from "./About";

const Nav = () => {
 
  return (
    <header>
      <h1>
        <Link to="/">YouTube</Link>
      </h1>
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
      <Link to="/about">About</Link>
      </h1>
    </header>
  );
};

export default Nav;
