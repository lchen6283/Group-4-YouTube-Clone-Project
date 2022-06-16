import React from "react";
import VideoList from "./VideoList";
import "./SearchBar.css";
import Video from "./Video";

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
    const { searchForVideo, videos } = this.props;
    searchForVideo(this.state.search);
    this.setState({
      search: "",
    });
  };

  render() {
    const { videos } = this.props;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          {/* <label for="search"></label> */}
          <input
            type="text"
            name="search"
            onChange={this.handleSelectChange}
            value={this.state.search}
            placeholder="Search..."
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </form>
        <VideoList videos={videos} />;
      </div>
    );
  }
}

export default SearchBar;
