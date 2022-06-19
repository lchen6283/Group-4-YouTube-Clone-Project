import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import VideoPlayer from "./components/VideoPlayer";
import Modal from "./components/Modal";

/*
 *Returns Home,
 *
 */
const App = () => {
  // getYoutubeAPI = () => {
  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=test&key=${process.env.REACT_APP_API_KEY}`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       this.setState({ videos: json.items });
  //     })
  //     .catch((err) => {
  //       console.log("error fetching image");
  //     });
  // };

  // componentDidMount() {
  //   this.getYoutubeAPI();
  // }

  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="*" element={<Modal />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos/:id" element={<VideoPlayer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
