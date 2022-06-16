import React from "react";
import SearchBar from "./SearchBar";
import "./Home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
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
          <p>No search results yet! Please submit a search</p>
        )}
      </div>
    );
  }
}
export default Home;
