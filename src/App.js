import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import VideoPlayer from "./components/VideoPlayer";
import Modal from "./components/Modal";
import YouTubeTrending from "./components/YouTubeTrending";
import SideBar from "./components/SideBar";

/**
 *@returns Nav and Routes to respective components
 */

// const videos = [];
// fetch(
//   `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_API_KEY}`
// )
//   .then((response) => response.json())
//   .then((json) => {
//     videos = json.items;
//   })
//   .catch((err) => {
//     navigate("./404");
//   });

const buttons = [
  "Trending",
  "All Time Popular",
  "New",
  "Funny",
  "Music",
  "Gaming",
  "Architecture",
  "Movie Trailers",
];

const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="*" element={<Modal navigate={navigate} />} />
        <Route
          path="/"
          element={<Home navigate={navigate} buttons={buttons} />}
        />
        <Route
          path="/youtube"
          element={<YouTubeTrending navigate={navigate} buttons={buttons} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/videos/:id"
          element={<VideoPlayer navigate={navigate} />}
        />
        <Route
          path="/youtube/videos/:id"
          element={<VideoPlayer navigate={navigate} />}
        />
      </Routes>
    </div>
  );
};

export default App;
