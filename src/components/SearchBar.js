import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.setState = {};
  }
  render() {
    return (
      <div>
        <form>
          {/* <label for="search"></label> */}
          <input
            type="text"
            name="search"
            placeholder="Search..."
            autoComplete="off"
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
