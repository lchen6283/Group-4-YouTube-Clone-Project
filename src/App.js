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
        <Route path="/" element={<Home navigate={navigate} />} />
        <Route
          path="/youtube"
          element={<YouTubeTrending navigate={navigate} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/videos/:id" element={<VideoPlayer />} />
        <Route path="/youtube/videos/:id" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
};

export default App;
