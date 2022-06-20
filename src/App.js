import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import VideoPlayer from "./components/VideoPlayer";
import Modal from "./components/Modal";
import YouTubeTrending from "./components/YouTubeTrending";

/*
 *Returns Home,
 *
 */
const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="*" element={<Modal err="Super Bad Error" />} />
          <Route path="/" element={<Home />} />
          <Route path="/youtube" element={<YouTubeTrending />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos/:id" element={<VideoPlayer />} />
          <Route path="/youtube/videos/:id" element={<VideoPlayer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
