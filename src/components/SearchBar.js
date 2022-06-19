import React from "react";
import VideoList from "./VideoList";
import Modal from "./Modal";
import "./SearchBar.css";

/**
 * Class component Search Bar
 * @returns <div> containing a search form and video list
 */
class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      showModal: false,
    };
  }

  updateSearchState = (event) => {
    const { value } = event.target;
    this.setState({
      search: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { searchForVideo } = this.props;
    searchForVideo(this.state.search);
    this.setState({
      search: "",
    });
  };

  showModal = (event) => {
    this.setState({
      showModal: !this.state.show,
    });
    console.log("Open Modal");
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
            onChange={this.updateSearchState}
            value={this.state.search}
            placeholder="Search..."
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </form>
        <VideoList videos={videos} />
      </div>
    );
  }
}

export default SearchBar;
