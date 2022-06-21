import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import VideoPlayer from "./components/VideoPlayer";
import Modal from "./components/Modal";
import YouTubeTrending from "./components/YouTubeTrending";

const topics = [
  "Trending",
  "All Time Popular",
  "New",
  "Funny",
  "Music",
  "Gaming",
  "Architecture",
  "Movie Trailers",
];

/**
 *@returns Nav and Routes to respective components
 */
const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="*" element={<Modal navigate={navigate} />} />
        <Route
          path="/"
          element={<Home navigate={navigate} buttons={topics} />}
        />
        <Route
          path="/youtube"
          element={<YouTubeTrending navigate={navigate} buttons={topics} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/videos/:id"
          element={<VideoPlayer navigate={navigate} buttons={topics} />}
        />
        <Route
          path="/youtube/videos/:id"
          element={<VideoPlayer navigate={navigate} buttons={topics} />}
        />
      </Routes>
    </div>
  );
};

export default App;
