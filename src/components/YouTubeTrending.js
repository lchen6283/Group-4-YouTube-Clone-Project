import React, { Component } from "react";
import Modal from "./Modal";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import "./YouTubeTrending.css";

export default class YouTubeTrending extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }

  searchForVideo = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=8&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({ videos: json.items });
      })
      .catch((err) => {
        this.props.navigate("./404");
      });
  };

  componentDidMount() {
    this.searchForVideo();
  }

  render() {
    return (
      <div className="youtube-trending">
        <h1>Trending Page</h1>
        <VideoList videos={this.state.videos} passedFrom="trending" />
      </div>
    );
  }
}
