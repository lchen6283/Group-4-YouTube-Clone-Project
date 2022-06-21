import React, { Component } from "react";
import VideoList from "./VideoList";
import SideBar from "./SideBar";
import "./YouTubeTrending.css";

/**
 * Class component Trending page, manages videos and API call to trending videos
 * @returns <VideoList>
 */
export default class YouTubeTrending extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }

  searchForVideo = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({ videos: json.items });
      })
      .catch(() => {
        this.props.navigate("./404");
      });
  };

  componentDidMount() {
    this.searchForVideo();
  }

  render() {
    const { buttons, navigate } = this.props;
    return (
      <div className="youtube-trending">
        <h1 className="trending">Trending Page</h1>
        <div className="sidebar-container">
          <SideBar buttons={buttons} navigate={navigate} className="topics" />
        </div>
        <div className="video-list-trending">
          <VideoList videos={this.state.videos} passedFrom="trending" />
        </div>
      </div>
    );
  }
}
