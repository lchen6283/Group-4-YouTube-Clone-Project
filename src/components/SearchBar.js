import React from "react";
import VideoList from "./VideoList";
import SideBar from "./SideBar";
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

  render() {
    const { videos, passedFrom, buttons, navigate } = this.props;
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
          <button className="searchButton" type="submit">
            Search
          </button>
        </form>
        <div className="sidebar-container">
          <SideBar className="topics" buttons={buttons} navigate={navigate} />
        </div>
        <div className="video-list-home">
          <VideoList videos={videos} passedFrom={passedFrom} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
