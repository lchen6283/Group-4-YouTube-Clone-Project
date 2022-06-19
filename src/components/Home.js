import React from "react";
import SearchBar from "./SearchBar";
import "./Home.css";

/**
 * Class component Home page, manages videos and API call
 * @returns <SearchBar>
 */
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchMade: false,
      videos: [],
    };
  }

  searchForVideo = (search) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search}&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({ videos: json.items });
      })
      .catch((err) => {
        console.log("error fetching image");
      });
  };

  // componentDidMount() {
  //   this.searchForVideo();
  // }

  render() {
    return (
      <div className="thumbnails">
        <SearchBar
          searchForVideo={this.searchForVideo}
          videos={this.state.videos}
        />
        {!this.state.videos.length && (
          <p>No Search Results Yet! Please submit a search above!</p>
        )}
      </div>
    );
  }
}
export default Home;
