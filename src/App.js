import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMeSection from "./components/About";
import Home from "./components/Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }

  getYoutubeAPI = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=test&key=AIzaSyAjzN0788Qelc0wXZVUCSBrUSNWxzOukeU`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({ videos: json.items });
      })
      .catch((err) => {
        console.log("error fetching image");
      });
  };

  componentDidMount() {
    this.getYoutubeAPI();
  }

  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home videos={this.state.videos} />} />
            <Route path="/about" element={<AboutMeSection />} />
          </Routes>
        </Router>
        <SearchBar />
        {console.log(this.state.videos)}
        {/* <VideoList videos={this.state.videos} /> */}
      </div>
    );
  }
}

export default App;
