import React from "react";
import "./App.css";
import Nav from "./components/Nav";
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

  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  videos={this.state.videos}
                  searchForVideo={this.searchForVideo}
                />
              }
            />
            <Route path="/about" element={<AboutMeSection />} />
            {console.log(this.state.videos)}
          </Routes>
        </Router>

        {console.log(this.state.videos)}
      </div>
    );
  }
}

export default App;
