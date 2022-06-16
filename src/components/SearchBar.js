import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  handleSelectChange = (event) => {
    const { value } = event.target;
    this.setState({
      search: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { searchForVideo } = this.props;
    searchForVideo(this.state.search);
    this.setState({});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          {/* <label for="search"></label> */}
          <input
            type="text"
            name="search"
            onChange={this.handleSelectChange}
            placeholder="Search..."
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
